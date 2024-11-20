<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e1c7ec (Actualización del login y rutas)
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
<<<<<<< HEAD
<<<<<<< HEAD
  star.style.animationDuration = `${12 + Math.random() * 18}s`;
=======
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
>>>>>>> 8e1c7ec (Actualización del login y rutas)
=======
  star.style.animationDuration = `${12 + Math.random() * 18}s`;
>>>>>>> 597f90a (Actualización de velocidad de animación)

  background.appendChild(star);
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 57e26a1 (Actualización de Acerca de nosotros)
// Seleccionar todas las cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Obtén los datos de la card
        const title = card.getAttribute('data-title');
        const content = card.getAttribute('data-content');
        const imgSrc = card.getAttribute('data-img');
<<<<<<< HEAD
=======

        // Actualiza el contenido del modal
        document.getElementById('infoModalLabel').textContent = title;
        document.getElementById('modalContent').textContent = content;
        document.getElementById('modalImage').src = imgSrc;

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));
        modal.show();
    });
});


// Forzar cierre y reinicio del modal al cerrarse
const infoModal = document.getElementById('infoModal');
infoModal.addEventListener('hidden.bs.modal', () => {
    // Limpia los datos del modal
    document.getElementById('infoModalLabel').textContent = '';
    document.getElementById('modalContent').textContent = '';
    document.getElementById('modalImage').src = '';
});


>>>>>>> 57e26a1 (Actualización de Acerca de nosotros)

        // Actualiza el contenido del modal
        document.getElementById('infoModalLabel').textContent = title;
        document.getElementById('modalContent').textContent = content;
        document.getElementById('modalImage').src = imgSrc;

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));
        modal.show();
    });
});


// Forzar cierre y reinicio del modal al cerrarse
const infoModal = document.getElementById('infoModal');
infoModal.addEventListener('hidden.bs.modal', () => {
    // Limpia los datos del modal
    document.getElementById('infoModalLabel').textContent = '';
    document.getElementById('modalContent').textContent = '';
    document.getElementById('modalImage').src = '';
});



=======
>>>>>>> 49b449c (Actualización estructura de la página)
=======

>>>>>>> 8e1c7ec (Actualización del login y rutas)

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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 49b449c (Actualización estructura de la página)
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
>>>>>>> 49b449c (Actualización estructura de la página)
