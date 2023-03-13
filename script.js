const container = document.querySelector(".container")
const split = document.querySelectorAll(".split")

split.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        e.target.classList.add("active")
    });
    element.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("active")
    });

})