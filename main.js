

let div = document.getElementById("div");

div.addEventListener("mouseover", () => {
    div.style.backgroundImage = `url("pic1.png")`;

})

div.addEventListener("mouseleave", () => {
    div.style.backgroundImage = `url("pic.png")`;
})