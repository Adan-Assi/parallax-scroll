const translate = document.querySelectorAll(".translate");
const main_title = document.querySelector("#main-header");
const header = document.querySelector("header");

let header_height = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    main_title.style.opacity = - scroll / (0.5*header_height) + 1;
})