const ICONO_LUNA = "🌙"; 
const ICONO_SOL = "☀️"; 

const boton = document.getElementById("btn-modo");
const CLAVE = "modoOscuro";

// Actualiza el icono
const actualizarBoton = () => {
    const esOscuro = document.body.classList.contains("oscuro");

    // Cambia de icono segun el modo
    boton.textContent = esOscuro ? ICONO_SOL : ICONO_LUNA;

    const texto = esOscuro ? "Activar modo claro" : "Activar modo oscuro";
    boton.setAttribute("aria-label", texto);
    boton.setAttribute("title", texto);
};

// Carga la preferencia guardada
try {
    if (localStorage.getItem(CLAVE) === "true") {
        document.body.classList.add("oscuro");
    }
} catch (error) {
    console.warn("No se pudo leer la preferencia guardada.");
}

// Cambio de modo
if (boton) {
    actualizarBoton();

    boton.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");

        actualizarBoton();

        // Guarda la preferencia
        try {
            localStorage.setItem(CLAVE, document.body.classList.contains("oscuro"));
        } catch (error) {
            console.warn("No se pudo guardar la preferencia.");
        }
    });
}