// Selecciona el contenedor del fondo
const background = document.querySelector('.background-animation');

// Genera múltiples estrellas
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Asigna una posición aleatoria
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Duración de la animación aleatoria
  star.style.animationDuration = `${12 + Math.random() * 18}s`;

  background.appendChild(star);
}

//Evento del envio de contactanos

document.getElementById("enviarMensaje").addEventListener.handleEvent("click", function(){
    
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email-contactanos input").value.trim();
    const phone = document.querySelector("#phone input").value.trim();
    const mensaje = document.querySelector("#mensajito textarea").value.trim();
    const privacidad = document.querySelector("#terms input").value.trim();

    if (nombre === "") {
        alert ("Por favor ingresa tu nombre, este campo no puede quedar vacío");
       } else if (phone === ""){
        alert ("Por favor ingresa tu teléfono, este campo no puede quedar vacío");
       } else if (12 >phone.length > 10) {
        alert ("Ingresa un número de teléfono válido");
       } else if (email === "") {
        alert ("¡Alto, este campo (Email) no puede estar vacío!");
       } else if (!email.includes ("@")){
        alert ("Correo no aceptado, intentalo de nuevo, revisa que tu correo este bien escrito");
       } else if (mensaje === ""){
        alert ("Para continuar escribe tu mensaje de contacto, ¿En que podemos ayudarte?");
       } else if (privacidad === ""){
        alert ("Acepta nuestros términos de privacidad antes de enviar :) ");
       } else{
        alert("Gracias por contactarte con IBL, " + nombre + " uno de nuestros asesores te atenderá a la brevedad. ¡También puedes encontrarnos en nuestras redes sociales!");
       }
    });
 
  console.log(nombre)
   