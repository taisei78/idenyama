let nav = document.querySelector(".header-nav");
let btn = document.querySelector(".hamburger");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
}
