"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const skin = document.getElementById("myskin");
    let rotacionando = false;
    let previousX = 0;
    let previousY = 0;
    skin.addEventListener("mousedown", (e) => {
        rotacionando = true;
        previousX = e.clientX;
        previousY = e.clientY;
    });
    document.addEventListener("mouseup", () => {
        rotacionando = false;
    });
    document.addEventListener("mousemove", (e) => {
        if (rotacionando) {
            const deltaX = e.clientX - previousX;
            const deltaY = e.clientY - previousY;
            skin.style.transform = `rotateY(${deltaX}deg) rotateX(${deltaY}deg)`;
        }
    });
    // Eventos de toque
    skin.addEventListener("touchstart", (e) => {
        rotacionando = true;
        previousX = e.touches[0].clientX;
        previousY = e.touches[0].clientY;
    });
    document.addEventListener("touchend", () => {
        rotacionando = false;
    });
    document.addEventListener("touchmove", (e) => {
        if (rotacionando) {
            const deltaX = e.touches[0].clientX - previousX;
            const deltaY = e.touches[0].clientY - previousY;
            skin.style.transform = `rotateY(${deltaX}deg) rotateX(${deltaY}deg)`;
            previousX = e.touches[0].clientX;
            previousY = e.touches[0].clientY;
        }
    });
});
document.addEventListener("scroll", () => {
    const angulo = window.scrollY;
    const rotacionaElemento = document.querySelectorAll(".element-myskin");
    Array.from(rotacionaElemento).map((e) => {
        e.style.transform = `rotateY(${angulo}deg)`;
    });
});
