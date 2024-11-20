// Lista de productos con sus categorías
const products = [
    { id: 1, name: "Laptop Acer Aspire 3", category: "Laptops", price: "$8,700 MXN", img:"product1.jpg" },
    { id: 2, name: "Laptop ASUS VivoBook 5", category: "Laptops", price: "$8,600 MXN", image: "product2.jpg" },
    { id: 3, name: "Laptop DELL Inspiron 15", category: "Laptops", price: "$8,499 MXN", image: "product3.jpg" },
    { id: 4, name: "Laptop HP Pavilion x360", category: "Laptops", price: "$10,999 MXN", image: "product4.jpg" },
    { id: 5, name: "Lenovo IdeaPad 3", category: "Laptops", price: "$7,000 MXN", image: "product5.jpg" },
    { id: 6, name: "PC gamer", category: "Computadoras", price: "$25.00", image: "product6.jpg" },
    { id: 7, name: "Apple Watch 3", category: "Smartwatch", price: "$15.00", image: "product7.jpg" },
    { id: 8, name: "Mouse Logitech", category: "Mouse", price: "$10.00", image: "product8.jpg" },
    { id: 9, name: "Teclado Gamer", category: "Teclados", price: "$120.00", image: "product9.jpg" },
    { id: 10, name: "Smartphone Samsung", category: "Smartphones", price: "$800.00", image: "product10.jpg" },
    // ... Más productos aquí
];

// Función para renderizar los productos
function renderProducts(filter = "all") {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";  // Limpiar los productos actuales

    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button>Agregar al carrito</button>
        `;

        productGrid.appendChild(productCard);
    });
}

// Cargar productos al cargar la página
window.onload = () => {
    renderProducts();
};

// Filtrar productos cuando cambie el select
document.getElementById("category-filter").addEventListener("change", (event) => {
    renderProducts(event.target.value);
});