"use strict";

function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");
    const bodyBottom = document.querySelector("body");

    bars.addEventListener("click", function () {
        nav.classList.toggle("nav-active");

        // burger animation
        bars.classList.toggle("close");

        bodyBottom.classList.toggle("body_bottom");
    });
}
navSide();
