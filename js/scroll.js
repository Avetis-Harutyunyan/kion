"use strict";

window.addEventListener("scroll", () => {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("navChange", window.scrollY > 20);

    const toTopBtn = document.querySelector(".toTop");
    toTopBtn.classList.toggle("topBtn_active", window.scrollY > 800);
});
