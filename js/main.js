const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Menu
const menu = $(".navbar__links");
const menuButton = $(".navbar__icons");
const overlay = $("#overlay");
const navbarIcon = $$(".navbar__icon");

menuButton?.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("display");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("display");
});

// Scroll to top
const scrollProgress = $("#scroll-to-top");

const calcScrollValue = () => {
    const currentPos = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const calcHeight = scrollHeight - clientHeight;
    const scrollValue = Math.round((currentPos * 100) / calcHeight);
    scrollProgress.style.display = currentPos > 100 ? "flex" : "none";
    scrollProgress.style.background = `conic-gradient(var(--green) 0% ${scrollValue}%, #d7d7d7 ${scrollValue}% 100%)`;
};

scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

// Header
const header = $("header");

window.onscroll = () => {
    calcScrollValue();
    const headerHeight = $("#banner").offsetTop;
    const currentPos = document.documentElement.scrollTop;
    if (currentPos > headerHeight) {
        header.classList.add("sticky");
        navbarIcon[0].style.backgroundColor = "#fff";
        navbarIcon[1].style.backgroundColor = "#fff";
        navbarIcon[2].style.backgroundColor = "#fff";
    } else {
        header.classList.remove("sticky");
        navbarIcon[0].style.backgroundColor = "var(--gray)";
        navbarIcon[1].style.backgroundColor = "var(--gray)";
        navbarIcon[2].style.backgroundColor = "var(--gray)";
    }
};
window.onload = calcScrollValue;