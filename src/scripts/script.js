// Definir los colores posibles
const colores = ['#B31237', '#f03813', '#2C9FA3', '#9b59b6'];

// Seleccionar todos los elementos con la clase "color-change"
const elementos = document.querySelectorAll('.color-change');

// Función para obtener un color aleatorio de la lista
function obtenerColorAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}

// Añadir el efecto hover a cada elemento
elementos.forEach(elemento => {
    elemento.addEventListener('mouseenter', function() {
        // Cambiar el color de fondo al pasar el ratón
        elemento.style.backgroundColor = obtenerColorAleatorio();
    });

    elemento.addEventListener('mouseleave', function() {
        // Restaurar el color original cuando el ratón salga
        elemento.style.backgroundColor = '#333'; // O cualquier color que desees
    });
});