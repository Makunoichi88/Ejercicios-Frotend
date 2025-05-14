const verboton = document.querySelector(".VerButton");
const resultado = document.querySelector(".mensaje");

 const Textooriginal = "Ver trailer";
 const Textocambiado = "Gracias por comprar";

verboton.addEventListener("click", function() {

verboton.textContent = Textocambiado;
setTimeout(() => {

    window.open("https://www.google.com/search?q=emoji+de+mierda&sca_esv=e46ce00556aae1ee&udm=2&sxsrf=AHTn8zrcQwJHlNZASqnwq6nd3oHBDa5Ngg%3A1747184969213&ei=Se0jaIz-Ca-vwbkPzN7sEA&ved=0ahUKEwjMxsab46GNAxWvVzABHUwvGwIQ4dUDCBE&uact=5&oq=emoji+de+mierda&gs_lp=EgNpbWciD2Vtb2ppIGRlIG1pZXJkYUj-IVCYA1i6HXAAeACQAQGYAeUHoAH4HaoBCzAuOS40LjUtMS4xuAEDyAEA-AEBmAIKoAK_E8ICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICCxAAGIAEGLEDGIMBmAMAkgcJMC40LjUuNS0xoAe6O7IHCTAuNC41LjUtMbgHvxM&sclient=img#vhid=hbWPGXGwOL9CoM&vssid=mosaic", "_blank");
    }, 1000);

}
);



