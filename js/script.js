
 // Captura el formulario y el campo de fecha
 const form = document.getElementById('appointment-form');
 const dateInput = document.getElementById('appointment-date');

 // Evento de envío del formulario
 form.addEventListener('submit', (event) => {
     event.preventDefault(); // Evita el envío para fines de demostración
     const selectedDate = dateInput.value;
     if (selectedDate) {
         alert(`Has seleccionado la fecha: ${selectedDate}`);
     } else {
         alert("Por favor, selecciona una fecha.");
     }
 }); 

 // header
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
<<<<<<< HEAD
<<<<<<< HEAD
// productos 

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de servicios
    const botonesServicio = document.querySelectorAll('.servicio-btn');
    
    // Obtener todas las secciones de detalle
    const detallesServicio = document.querySelectorAll('.servicio-info');

    // Función para mostrar solo el detalle del servicio seleccionado
    function mostrarDetalleServicio(servicioId) {
        // Ocultar todos los detalles
        detallesServicio.forEach(function(detalle) {
            detalle.classList.remove('active');
        }); 

        // Mostrar el detalle del servicio seleccionado
        const servicioSeleccionado = document.getElementById(`servicio-${servicioId}`);
        servicioSeleccionado.classList.add('active');
    }

    // Asignar el evento a cada botón
    botonesServicio.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const servicioId = boton.getAttribute('data-servicio');
            mostrarDetalleServicio(servicioId);
        });
    });
});
<<<<<<< HEAD
=======
// productos
=======
// productos 
>>>>>>> 96a6acc (Actualicé mi página de servicios solo de los productos)

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de servicios
    const botonesServicio = document.querySelectorAll('.servicio-btn');
    
    // Obtener todas las secciones de detalle
    const detallesServicio = document.querySelectorAll('.servicio-info');

    // Función para mostrar solo el detalle del servicio seleccionado
    function mostrarDetalleServicio(servicioId) {
        // Ocultar todos los detalles
        detallesServicio.forEach(function(detalle) {
            detalle.classList.remove('active');
        });

        // Mostrar el detalle del servicio seleccionado
        const servicioSeleccionado = document.getElementById(`servicio-${servicioId}`);
        servicioSeleccionado.classList.add('active');
    }

    // Asignar el evento a cada botón
    botonesServicio.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const servicioId = boton.getAttribute('data-servicio');
            mostrarDetalleServicio(servicioId);
        });
    });
});
>>>>>>> 32826cf (Agrego la página de servicios ya actualizada y estilizada)
=======
>>>>>>> 86ebe9c (usando la plantilla para el header)
