// Lista de productos con sus categorías
const products = [
    { id: 1, name: "Laptop Acer Aspire 3", category: "Laptops", price: "$8,700 MXN", img:"product1.jpg" },
    { id: 2, name: "Laptop ASUS VivoBook 5", category: "Laptops", price: "$8,600 MXN", image: "product2.jpg" },
    { id: 3, name: "Laptop DELL Inspiron 15", category: "Laptops", price: "$8,499 MXN", image: "product3.jpg" },
    { id: 4, name: "Laptop HP Pavilion x360", category: "Laptops", price: "$10,999 MXN", image: "product4.jpg" },
    { id: 5, name: "Lenovo IdeaPad 3", category: "Laptops", price: "$7,000 MXN", image: "product5.jpg" },
    { id: 6, name: "Infinix Note 40 pro Dual Sim", category: "Smartphones", price: "$4,500 MXN", image: "product6.jpg" },
    { id: 7, name: "OPPO Reno 11 5G Dual SIM", category: "Smartphones", price: "$7,000 MXN", image: "product7.jpg" },
    { id: 8, name: "Motorola Edge 50 Fusión", category: "Smartphones", price: "$7,500 MXN", image: "product8.jpg" },
    { id: 9, name: "Xiaomi Redmi Note 13 pro+ 5G Dual SIM", category: "Smartphones", price: "$6,900 MXN", image: "product9.jpg" },
    { id: 10, name: "Xiaomi Poco F6 Pro 5G ", category: "Smartwatch", price: "$2,899 MXN", image: "product10.jpg" },
    { id: 11, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product11.jpg" },
    { id: 12, name: "Huawei Band 9", category: "Smartwatch", price: "$609 MXN", image: "product12.jpg" },
    { id: 13, name: "Xiaomi 9", category: "Smartwatch", price: "$760 MXN", image: "product13.jpg" },
    { id: 14, name: "Pico 4 VR", category: "Smartwatch", price: "$7,999 MXN", image: "product14.jpg" },
    { id: 15, name: "Zaklu porta gafas VR", category: "Smartwatch", price: "$309 MXN", image: "product15.jpg" },
    { id: 16, name: "Audífonos Sony MDR-ZX110", category: "Audifonos", price: "$344 MXN", image: "product16.jpg" },
    { id: 17, name: "Xiaomi Audífonos in Ear Inalámbricos Buds 6 Play", category: "Audifonos", price: "$69.30 MXN", image: "product17.jpg" },
    { id: 18, name: "Cable HDMI 10K 8K 4K 2 Metros Ultra Alta Velocidad", category: "Auriculares", price: "$249 MXN", image: "product18.jpg" },
    { id: 19, name: "UGREEN Cable USB C", category: "Auriculares", price: "$184 MXN", image: "product19.jpg" },
    { id: 20, name: "Cámara Web HD 1080P con micrófono y cable USB", category: "Webcam", price: "$206 MXN", image: "product20.jpg" },
    { id: 21, name: "Teclado Inalámbrico portátil Ultradelgado Xukinroy", category: "Teclado", price: "$185 MXN", image: "product21.jpg" },
    { id: 22, name: "Corsair K100 RBG", category: "Teclado", price: "$220 MXN", image: "product23.jpg" },
    { id: 24, name: "Mouse inalambrico vertical recargable", category: "Mouse", price: "$125 MXN", image: "product24.jpg" },
    { id: 25, name: "Mouse inalambrico Logitech", category: "Mouse", price: "$58 MXN", image: "product25.jpg" },
    { id: 26, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product26.jpg" },
    { id: 27, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product27.jpg" },
    { id: 28, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product28.jpg" },
    { id: 29, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product29.jpg" },
    { id: 30, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product30.jpg" },
    { id: 31, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product31.jpg" },
    { id: 32, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product32.jpg" },
    { id: 33, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product33.jpg" },
    { id: 34, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product34.jpg" },
    { id: 35, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product35.jpg" },
    { id: 36, name: "Garmin Forerunner 165", category: "Smartphones", price: "$9,500 MXN", image: "product36.jpg" },

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