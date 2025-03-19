const cajaTexto = document.getElementById("cajaTexto");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const textoVentana = document.getElementById("textoVentana");
const btnCambiarColor = document.getElementById("btnCambiarColor");
const btnCerrarVentana = document.getElementById("btnCerrarVentana");

// Evento para mostrar la ventana emergente con el texto al presionar Enter
cajaTexto.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        // Mostrar la ventana emergente con el texto ingresado
        textoVentana.textContent = cajaTexto.value;
        ventanaEmergente.style.display = "block";
    }
});

// Ciclo de colores
const colores = [
    { fondo: "white", texto: "black" },
    { fondo: "black", texto: "white" },
    { fondo: "lightblue", texto: "red" }
];
let indiceColor = 0;

// Evento para cambiar el color de la ventana emergente al hacer clic en el botón
btnCambiarColor.addEventListener("click", () => {
    indiceColor = (indiceColor + 1) % colores.length;
    ventanaEmergente.style.backgroundColor = colores[indiceColor].fondo;
    textoVentana.style.color = colores[indiceColor].texto;
});

// Evento para cerrar la ventana emergente
btnCerrarVentana.addEventListener("click", () => {
    ventanaEmergente.style.display = "none";
});
