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

var dob = new Date("2002, 6, 14");
var month_diff = Date.now() - dob.getTime();

var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();

var age = Math.abs(year-1970);

document.getElementById("age").innerHTML=age;

