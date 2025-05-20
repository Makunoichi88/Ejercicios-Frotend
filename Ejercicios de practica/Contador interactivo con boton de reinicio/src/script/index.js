const botonsuma = document.querySelector(".botonsuma")
const numero = document.querySelector(".contenedor");
const botonreset = document.querySelector(".botonreset");

numero.textContent = 0;

let contador = 0;

botonsuma.addEventListener("click", () => {

    contador++;
    numero.textContent = contador;
    actualizarcolor();

})

botonreset.addEventListener("click", () => {

    numero.textContent = 0;
    contador = 0;
    actualizarcolor();
})

function actualizarcolor () {

    if (contador >= 20) {
        document.body.style.backgroundColor = "yellow";
    } else if (contador >= 10) {
        document.body.style.backgroundColor = "green";
    } else if (contador < 10) {
        document.body.style.backgroundColor = "grey";
    }
}