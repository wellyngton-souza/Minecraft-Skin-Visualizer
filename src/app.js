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
    const rotacionaElemento = document.getElementById("myskin");
    rotacionaElemento.style.transform = `rotateY(${angulo}deg)`;
});
const trocarSkin = () => {
    const input = document.getElementById("imagemInput");
    const pecasCorpo = document.querySelectorAll("#myskin > * > *");
    if ((input === null || input === void 0 ? void 0 : input.files) && (input === null || input === void 0 ? void 0 : input.files[0])) {
        const reader = new FileReader();
        reader.onload = () => {
            Array.from(pecasCorpo).map((e) => {
                if (e instanceof HTMLElement) {
                    e.style.backgroundImage = `url(${reader.result})`;
                }
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
};
let lastScrollTop = 0;
document.addEventListener("scroll", () => {
    let navbar = document.getElementById("nav");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.classList.add("bg-transparent");
    }
    else {
        navbar.classList.remove("bg-transparent");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
