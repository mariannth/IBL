document.getElementById("formularioProducto").addEventListener("submit", function(event) {
    event.preventDefault(); // Con esto el formulario no se envia deinmediato
<<<<<<< HEAD
=======

>>>>>>> master

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const categoria = document.getElementById("seleccion-categoria").value;
    const precio = document.getElementById("precio").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const imagen= document.getElementById("imagen").files[0];

<<<<<<< HEAD
    // Sirsve para verificar si el campo "categoría" está vacío
    if (!categoria) {
        alert("Por favor, selecciona una categoria.");
=======
    // Imprimir los valores en la consola
    console.log("Nombre:", nombre);
    console.log("Descripción:", descripcion);
    console.log("Marca:", marca);
    console.log("Categoría:", categoria);
    console.log("Precio:", precio);
    console.log("Cantidad:", cantidad);
    console.log("Código:", codigo);
    console.log("Imagen:", imagen);

    function showAlert(mensaje, tipo) {
        const alertContainer = document.getElementById("alert-container");
        const alerta = document.createElement("div");
        alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
        alerta.role = "alert";
        alerta.innerHTML = mensaje + 
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        alertContainer.appendChild(alerta);
        // Opcional: Cerrar alerta después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }

    // Sirsve para verificar si el campo "categoría" está vacío
    if (!categoria) {
        showAlert("Por favor, selecciona una categoria.", "warning");
>>>>>>> master
        return; //Se detiene si falta la selección de la categoría
    }

    // Aqui sirve para verificar si el campo "nombre" está vacío
    if (!nombre) {
<<<<<<< HEAD
        alert("Por favor, ingresa el nombre del producto.");
=======
        showAlert("Por favor, ingresa el nombre del producto.", "warning");
>>>>>>> master
        return; // Se detiene el envío si falta el nombre
    }

    // Para verificar si el campo "descripcion" está vacío
    if (!descripcion) {
<<<<<<< HEAD
        alert("Por favor, ingresa una descripción.");
=======
        showAlert("Por favor, ingresa una descripción.", "warning");
>>>>>>> master
        return; // Se detiene el envío si falta la descripcion
    }

    // Para verificar si el campo "marca" está vacío
    if (!marca) {
<<<<<<< HEAD
        alert("Por favor, ingresa una marca.");
=======
        showAlert("Por favor, ingresa una marca.", "warning");
>>>>>>> master
        return; // Se detiene el envío si falta la marca
    }
    
    // Para verificar si el campo "codigo" está vacío
    if (!codigo) {
<<<<<<< HEAD
        alert("Por favor, ingresa el código del producto.");
=======
        showAlert("Por favor, ingresa el código del producto.", "warning");
>>>>>>> master
        return; // Se detiene el envío si falta el codigo
    }
    
    // Para verificar si el campo "codigo" tiene solo números
    if (isNaN(codigo)) {
<<<<<<< HEAD
    alert("Por favor, ingresa solo números en el campo de código.");
=======
        showAlert("Por favor, ingresa solo números en el campo de código.", "warning");
>>>>>>> master
    return; // Se detiene el envío si hay letras u otros caracteres
    }


    // Para vrificar si el campo "precio" está vacío
    if (!precio) {
        showAlert("Por favor, ingresa un precio.", "warning");
        return; // Detiene el envío si falta el precio
    }
    if (isNaN(precio)) {
<<<<<<< HEAD
        alert("Por favor, ingresa solo números en el campo de precio.");
=======
        showAlert("Por favor, ingresa solo números en el campo de precio.", "warning");
>>>>>>> master
        return; // Se detiene el envío si hay letras u otros caracteres
    }

    
    // Para verificar si el campo "cantidad" está vacío
    if (!cantidad) {
<<<<<<< HEAD
        alert("Por favor, ingresa una cantidad.");
        return; // Se detiene el envío si falta la cantidad
    }
    if (isNaN(cantidad)) {
        alert("Por favor, ingresa solo números en el campo de cantidad.");
=======
        showAlert("Por favor, ingresa una cantidad.", "warning");
        return; // Se detiene el envío si falta la cantidad
    }
    if (isNaN(cantidad)) {
        showAlert("Por favor, ingresa solo números en el campo de cantidad.", "warning");
>>>>>>> master
        return; // Se detiene el envío si hay letras u otros caracteres
    }

    // Para verificar si el campo "imagen" está vacío
    if (!imagen) {
<<<<<<< HEAD
        alert("Por favor, ingresa una imagen.");
=======
        showAlert("Por favor, ingresa una imagen.", "warning");
>>>>>>> master
        return; // Se detiene el envío si falta una imagen
    }



<<<<<<< HEAD
    // Sirve para recargar la página después de un pequeño retraso
    setTimeout(() => {
        location.reload();
    }, 500); // Aqui se recarga la página después de 500 ms (medio segundo)
    });



    // Creacion  del objeto FormData
=======
    // Crear el objeto productoData con los datos del formulario
    const productoData = {
        nombre: nombre,
        descripcion: descripcion,
        marca: marca,
        categoria: categoria,
        precio: parseFloat(precio), // Asegúrate de que el precio sea un número
        cantidad: parseInt(cantidad), // Asegúrate de que la cantidad sea un número entero
        codigo: codigo,
        imagen: imagen.name // O solo el nombre de la imagen
    };


     // Convertir el objeto JavaScript a formato JSON
     const productoJSON = JSON.stringify(productoData);

     // Mostrar el objeto JSON en la consola (opcional)
     console.log("Objeto JSON:", productoJSON);







    // Creacion  del objeto FormData, ES UN OBJETO JAVASCRIPT CON LOS DATOS DEL FORM
>>>>>>> master
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("marca", marca);
    formData.append("categoria", categoria);
    formData.append("precio", precio);
    formData.append("cantidad", cantidad);
    formData.append("imagen", imagen); // Añadir el archivo de imagen

    // Sirve para enviar datos al servidor usando fetch y enviarla al servidro  local
    fetch("http://localhost:3000/registro-producto", {
        method: "POST",
        body: formData, // Se envia el FormData
    })
<<<<<<< HEAD
        .then((response) => response.json())
        .then((data) => {
            console.log("Producto registrado:", data);
            alert("¡Producto registrado con éxito!");
            // Todavia no se si ponerlo aqui: para la página después del registro exitoso
            setTimeout(() => location.reload(), 500);
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Hubo un error al registrar el producto.");
=======

        .then((response) => response.json())
        .then((data) => {
            console.log("Producto registrado:", data);
            showAlert("¡Producto registrado con éxito!", "success"); // resgitra si el formulario fue procesado y enviado correctamente
            // Todavia no se si ponerlo aqui: para la página después del registro exitoso
            setTimeout(() => {
                // Puedes redirigir a una página o limpiar el formulario
                document.getElementById("formularioProducto").reset(); 
            }, 500);

        })
        .catch((error) => {
            console.error("Error:", error);
            showAlert("Hubo un error al registrar el producto.", "danger");
>>>>>>> master
        });
});