const canvas = document.getElementById("matrixBackground");
const ctx = canvas.getContext("2d");

// Configuración de caracteres y variables de animación
const matrix = "01".split(""); // Usamos 0 y 1 como caracteres para la "lluvia"
const fontSize = 24; // Tamaño de la fuente (puedes cambiarlo para que sea más grande o pequeño)
let columns = Math.floor(canvas.width / fontSize); // Número de columnas basado en el tamaño del canvas
let drops = Array(columns).fill(0); // Inicializamos las gotas, todas empezarán desde la parte superior

// Función para ajustar el tamaño del canvas
function resizeCanvas() {
    const footerHeight = document.querySelector("footer") ? document.querySelector("footer").offsetHeight : 0;
    const navHeight = document.querySelector("nav") ? document.querySelector("nav").offsetHeight : 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - navHeight - footerHeight; // Excluir altura del navbar y footer

    // Recalcular las columnas al cambiar el tamaño del canvas
    columns = Math.floor(canvas.width / fontSize); 
    drops.length = columns; // Ajustar la longitud del array de gotas
    drops.fill(0); // Reiniciar las gotas
}

// Llamamos a la función `resizeCanvas()` una vez que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    resizeCanvas(); // Llamar a la función de redimensionamiento después de que el DOM esté listo
    window.addEventListener('resize', resizeCanvas); // Redimensionar cuando se cambia el tamaño de la ventana
});

// Función de animación
function draw() {
    // Fondo negro semitransparente para el efecto de "lluvia"
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#20e5f6"; // Color de la "lluvia" (el texto)
    ctx.font = fontSize + "px monospace"; // Usamos una fuente monoespaciada para que las gotas tengan un buen formato

    // Recorremos cada columna (cada gota de la lluvia)
    drops.forEach((y, index) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)]; // Escoge un carácter aleatorio (0 o 1)
        const x = index * fontSize; // Posición horizontal de la gota
        ctx.fillText(text, x, y * fontSize);  // Dibuja el carácter en el canvas

        // Si una gota ha llegado al fondo del canvas, se reinicia a la parte superior
        if (y * fontSize > canvas.height && Math.random() > 0.980) {
            drops[index] = 0; // Reinicia la gota a la parte superior
        }

        // Aumentamos la posición de cada gota para que siga cayendo
        drops[index]++;
    });
}

// Llamamos a la función `draw` cada 50ms para actualizar la animación
setInterval(draw, 50);


document.addEventListener('DOMContentLoaded', () => {
    // Retraso de 7 segundos
    setTimeout(() => {
        // Referencias a la imagen y el enlace
        const image = document.getElementById('delayedImage');
        const link = document.getElementById('imageLink');
        
        // Hacer que el enlace sea visible
        link.style.display = 'block'; 
        
        // Agregar la clase para hacer visible la imagen con la animación de deslizamiento
        image.classList.add('show-image');
    }, 7000); // 7000ms = 7 segundos
});






