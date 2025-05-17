function coloraleatorio() {

    const letra = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {

        color += letra[Math.floor(Math.random() * 16)];
    }
    return color;
}



const buttoncolor = document.querySelector(".button");
const nombrecolor = document.querySelector(".contenedor");

buttoncolor.addEventListener("click", () => {

    const color = coloraleatorio();
    document.body.style.backgroundColor = color;
    nombrecolor.textContent = color;

})