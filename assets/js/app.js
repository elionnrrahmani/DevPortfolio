const scrollUp = document.querySelector('#go-up');

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth",
    });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);

const card = document.querySelector('.card');
const update = ({x,y}) => {
    const bounds = card.getBoundingClientRect()
    const posX = x-bounds.x
    const posY = y-bounds.y
    const ratioX = posX / bounds.width
    const ratioY = posY / bounds.height
    card.style.setProperty('--ratio-x', ratioX)
    card.style.setProperty('--ratio-y', ratioY)
}

card.addEventListener('pointermove', update)