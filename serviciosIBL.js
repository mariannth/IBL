// header
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
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
=======
// productos

// Mostrar u ocultar la descripción de cada producto al hacer clic
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('click', () => {
        const descripcion = producto.querySelector('.producto-descripcion');
        descripcion.style.display = descripcion.style.display === 'block' ? 'none' : 'block';
    });
});

// Añadir al carrito
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', (event) => {
        event.stopPropagation();  // Evitar que se cierre la descripción al hacer clic en el botón

        // Aquí podrías agregar la lógica para añadir el producto al carrito real
        const productoNombre = boton.closest('.producto').querySelector('h3').textContent;
        console.log(`Producto añadido al carrito: ${productoNombre}`);
    });
});
>>>>>>> 32826cf (Agrego la página de servicios ya actualizada y estilizada)
