document.getElementById("formulario-cotizacion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const categoria = document.getElementById("seleccion-categoria").value;
    const precio = document.getElementById("precio").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const imagen= document.getElementById("imagen").value.trim();

    // Verificar si el campo "categoría" está vacío
    if (!categoria) {
        alert("Por favor, selecciona una categoria.");
        return; // Detiene el envío si falta la selección de la categoría
    }

    // Verificar si el campo "nombre" está vacío
    if (!nombre) {
        alert("Por favor, ingresa el nombre del producto.");
        return; // Detiene el envío si falta el nombre
    }

    // Verificar si el campo "descripcion" está vacío
    if (!descripcion) {
        alert("Por favor, ingresa una descripción.");
        return; // Detiene el envío si falta la descripcion
    }

    // Verificar si el campo "marca" está vacío
    if (!marca) {
        alert("Por favor, ingresa una marca.");
        return; // Detiene el envío si falta la marca
    }
    
    // Verificar si el campo "codigo" está vacío
    if (!codigo) {
        alert("Por favor, ingresa el código del producto.");
        return; // Detiene el envío si falta el codigo
    }
    
    // Verificar si el campo "codigo" tiene solo números
    if (isNaN(codigo)) {
    alert("Por favor, ingresa solo números en el campo de código.");
    return; // Detiene el envío si hay letras u otros caracteres
    }


    // Verificar si el campo "precio" está vacío
    if (!precio) {
        alert("Por favor, ingresa un precio.");
        return; // Detiene el envío si falta el precio
    }
    if (isNaN(precio)) {
        alert("Por favor, ingresa solo números en el campo de precio.");
        return; // Detiene el envío si hay letras u otros caracteres
    }

    
    // Verificar si el campo "cantidad" está vacío
    if (!cantidad) {
        alert("Por favor, ingresa una cantidad.");
        return; // Detiene el envío si falta la cantidad
    }
    if (isNaN(cantidad)) {
        alert("Por favor, ingresa solo números en el campo de cantidad.");
        return; // Detiene el envío si hay letras u otros caracteres
    }

    // Verificar si el campo "imagen" está vacío
    if (!imagen) {
        alert("Por favor, ingresa una imagen.");
        return; // Detiene el envío si falta una imagen
    }
    
     // En caso que todos los datos sean llenados correctamente
     alert("Formulario enviado con éxito.");



    // Recargar la página después de un pequeño retraso
    setTimeout(() => {
        location.reload();
    }, 500); // Recarga la página después de 500 ms (medio segundo)
    });
