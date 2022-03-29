const h1 = document.getElementById("nombre");
const h2 = document.getElementById("saludo");
const button = document.getElementById("boton")

document.addEventListener("click", registrarNombre);

function registrarNombre() {
    const nombre = prompt("Registra tu Nombre");
    mostrarNombre(nombre);
};

function mostrarNombre(nombre) {
    h2.textContent = "Hola!👋🤓";
    h1.textContent = nombre;
    button.textContent = "Registrado con éxito!"
};

