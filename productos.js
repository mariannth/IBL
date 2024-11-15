// Datos de productos simulados
const products = [
    { id: 1, name: "Acer Aspire 3", brand: "Acer", price: "$8,755 MXN", img: "https://via.placeholder.com/250x200", description: "Descripción del producto 1", specifications: "Especificaciones del producto 1" },
    { id: 2, name: "Asus Vivobook", brand: "Asus", price: "$8,699 MXN", img: "https://via.placeholder.com/250x200", description: "Descripción del producto 2", specifications: "Especificaciones del producto 2" },
    { id: 3, name: "Dell Inspiron 3520", brand: "DELL", price: "8,499 MXN", img: "https://via.placeholder.com/250x200", description: "Descripción del producto 3", specifications: "Especificaciones del producto 3" },
    { id: 4, name: "HP Pavilion X360", brand: "HP", price: "$10,999 MXN", img: "https://via.placeholder.com/250x200", description: "Descripción del producto 4", specifications: "Especificaciones del producto 4" },
    { id: 5, name: "Lenovo Idepad Slim 3 ", brand: "Lenovo", price: "$7,000 MXN", img: "https://via.placeholder.com/250x200", description: "Descripción del producto 4", specifications: "Especificaciones del producto 4" },
    // Agregar más productos según sea necesario
];

// Función para renderizar los productos
function renderProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar productos previos

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button onclick="alert('Especificaciones: ${product.specifications}')">Ver Especificaciones</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Filtrar productos según los filtros seleccionados
function filterProducts() {
    const priceFilter = document.getElementById('price-filter').value;
    const brandFilter = document.getElementById('brand-filter').value;
    const productFilter = document.getElementById('product-filter').value;

    const filtered = products.filter(product => {
        return (priceFilter === 'todos' || product.price === priceFilter) &&
               (brandFilter === 'todos' || product.brand === brandFilter) &&
               (productFilter === 'todos' || product.name.toLowerCase().includes(productFilter.toLowerCase()));
    });

    renderProducts(filtered);
}

// Inicializar filtros y productos al cargar la página
window.onload = function() {
    renderProducts(products);

    // Agregar eventos a los filtros
    document.getElementById('price-filter').addEventListener('change', filterProducts);
    document.getElementById('brand-filter').addEventListener('change', filterProducts);
    document.getElementById('product-filter').addEventListener('change', filterProducts);
};

