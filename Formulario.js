document.getElementById("formulario-cotizacion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario

    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("seleccion-servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const fechaCotizacion = document.getElementById("fecha-cotizacion").value;

    // Verificar si el campo "nombre" está vacío
    if (!nombre) {
        alert("Por favor, ingresa tu nombre.");
        return; // Detiene el envío si falta el nombre
    }

    // Verificar si el campo "correo electrónico" está vacío
    if (!correo) {
        alert("Por favor, ingresa tu correo electrónico.");
        return; // Detiene el envío si falta el correo
    }

    // Verificar si el campo "teléfono" está vacío
    if (!telefono) {
        alert("Por favor, ingresa tu número de teléfono.");
        return; // Detiene el envío si falta el teléfono
    }

    // Verificar si el campo "servicio" está vacío
    if (!servicio) {
        alert("Por favor, selecciona un servicio.");
        return; // Detiene el envío si falta la selección del servicio
    }

    // Verificar si el campo "mensaje" está vacío
    if (!mensaje) {
        alert("Por favor, ingresa un mensaje.");
        return; // Detiene el envío si falta el mensaje
    }

    // Verificar si el campo "fecha" está vacío
    if (!fechaCotizacion) {
        alert("Por favor, selecciona una fecha.");
        return; // Detiene el envío si falta la fecha
    }

    // Si todos los campos están completos, mostrar la fecha seleccionada
    alert("Fecha seleccionada: " + fechaCotizacion);

    // Recargar la página después de un pequeño retraso
    setTimeout(() => {
        location.reload();
    }, 500); // Recarga la página después de 500 ms (medio segundo)
});
