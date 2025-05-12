// seleccionamos el boton
const boton = document.querySelector("#miboton");
const ocultar = document.querySelector("#resultado");

ocultar.style.display = "none";

boton.addEventListener("click", function() {

    const contenedor = document.querySelector("#resultado");

    const mensajeExistente = contenedor.querySelector("p");

    if(mensajeExistente && ocultar.style.display === "block") {

        contenedor.innerHTML = "";
        ocultar.style.display = "none";

    } else {

    const mensaje = document.createElement("p");
    mensaje.textContent = "Gracias por tu interes, te respondere pronto.";
    contenedor.appendChild(mensaje);
    ocultar.style.display = "block"
    
    }

});