// header
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
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