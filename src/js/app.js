function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");
    const bodyBottom = document.querySelector("body");

    bars.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // burger animation
        bars.classList.toggle("close");

        bodyBottom.classList.toggle("body_bottom");
    });
}
navSide();

function search() {
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector("#search-input");

    searchBtn.addEventListener("click", () => {
        searchInput.classList.add("input-active");
    });
}

search();