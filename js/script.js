// Selecciona el contenedor del fondo
const background = document.querySelector('.background-animation');

// Genera múltiples estrellas
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Asigna una posición aleatoria
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Duración de la animación aleatoria
  star.style.animationDuration = `${2 + Math.random() * 3}s`;

  background.appendChild(star);
}



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
