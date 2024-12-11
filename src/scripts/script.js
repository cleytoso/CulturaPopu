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

/* filtrado */


    function filtrar(categoria) {
        // Primero, eliminar la clase activa de todos los botones
        let botones = document.querySelectorAll('.botones');
        botones.forEach(function(boton) {
            boton.classList.remove('activo');
        });
    
        // Luego, agregar la clase activa al botón que se clicó
        let botonActivo = document.querySelector(`button[onclick="filtrar('${categoria}')"]`);
        botonActivo.classList.add('activo');
    
        // Obtener todos los elementos del calendario
        let dias = document.querySelectorAll('.wrapperCalendar .grid-21, .wrapperCalendar .grid-22, .wrapperCalendar .grid-23, .wrapperCalendar .grid-24, .wrapperCalendar .grid-25, .wrapperCalendar .grid-26, .wrapperCalendar .grid-27, .wrapperCalendar .grid-31, .wrapperCalendar .grid-32, .wrapperCalendar .grid-33, .wrapperCalendar .grid-34, .wrapperCalendar .grid-35, .wrapperCalendar .grid-36, .wrapperCalendar .grid-37, .wrapperCalendar .grid-41, .wrapperCalendar .grid-42, .wrapperCalendar .grid-43, .wrapperCalendar .grid-44, .wrapperCalendar .grid-45, .wrapperCalendar .grid-46, .wrapperCalendar .grid-47, .wrapperCalendar .grid-51, .wrapperCalendar .grid-52, .wrapperCalendar .grid-53, .wrapperCalendar .grid-54, .wrapperCalendar .grid-55, .wrapperCalendar .grid-56, .wrapperCalendar .grid-57, .wrapperCalendar .grid-61, .wrapperCalendar .grid-62, .wrapperCalendar .grid-63, .wrapperCalendar .grid-64, .wrapperCalendar .grid-65, .wrapperCalendar .grid-66, .wrapperCalendar .grid-67, .wrapperCalendar .grid-71, .wrapperCalendar .grid-72');
    
        // Restablecer el fondo de todos los días
        dias.forEach(function(dia) {
            dia.classList.remove('highlight');
        });
    
        // Si la categoría seleccionada es "todos", resaltar todos los elementos
        if (categoria === "todos") {
            dias.forEach(function(dia) {
                dia.classList.add('highlight');
            });
        } else {
            // Filtrar solo los días que coincidan con la categoría seleccionada
            dias.forEach(function(dia) {
                if (dia.getAttribute('data-category') === categoria) {
                    dia.classList.add('highlight');
                }
            });
        }
    }
    