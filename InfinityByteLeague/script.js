// Arreglo inicial de productos
let servicios = ["desarrollo de paginas web", "desarrollo de aplicaciones", "consultoría en ciberseguridad",  "consultoría en transformación digital", " curso desarrollo web", "curso ciberseguridad", "curso análisis de datos", "talleres"]; // Arreglo inicial de productos

// Función para mostrar productos en tarjetas
function displayCatalog(products) {
    // Obtener el contenedor de las tarjetas de productos
    const catalogContainer = document.getElementById("servicios");

    // Limpiar el contenido actual del contenedor de catálogo
    catalogContainer.innerHTML = "";

    // Iterar sobre cada producto en el arreglo pasado como argumento
    products.forEach(product => {
        // Crear un nuevo elemento <div> para cada tarjeta
        const card = document.createElement("div");

        // Asignar clases de Bootstrap para el diseño de la tarjeta
        card.className = "col-md-4 mb-3";

        // Definir el contenido HTML de cada tarjeta
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product}</h5>
                </div>
            </div>
        `;

        // Añadir la tarjeta al contenedor principal del catálogo
        catalogContainer.appendChild(card);
    });
}

// Función para agregar un producto al catálogo
function agregarProducto() {
  // Obtener el valor del campo de entrada de texto
  const productInput = document.getElementById("productInput");

  // Quitar espacios en blanco del inicio y fin del valor ingresado
  const productito = productInput.value.trim();

  // Verificar que el campo de entrada no esté vacío
  if (productito) {
      // Agregar el nuevo producto al arreglo del catálogo
      servicios.push(productito);

      // Limpiar el campo de entrada después de agregar el producto
      productInput.value = "";

      // Actualizar la visualización del catálogo con el nuevo producto
      displayCatalog(servicios);
  } else {
      // Mostrar una alerta si el campo de entrada está vacío
      alert("Por favor ingresa un nombre de producto.");
  }
}

// Función para buscar un producto en el catálogo
function buscarProducto() {
  // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
  const searchInput = document.getElementById("searchInput").value.trim();

  // Verificar si el campo de búsqueda no está vacío
  if (searchInput) {
      // Filtrar el arreglo del catálogo para obtener productos que incluyan el texto buscado
      const filtrarProducts = servicios.filter(product => product.includes(searchInput));

      // Mostrar solo los productos que coinciden con la búsqueda
      displayCatalog(filtrarProducts);
  } else {
      // Si el campo de búsqueda está vacío, mostrar todos los productos
      displayCatalog(servicios);
  }
}

// Llamar a la función displayCatalog para mostrar el catálogo inicial al cargar la página
displayCatalog(servicios);
