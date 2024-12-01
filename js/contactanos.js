// Selecciona el contenedor del fondo
const background = document.querySelector(".background-animation");

// Genera múltiples estrellas
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Asigna una posición aleatoria
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Duración de la animación aleatoria
  star.style.animationDuration = `${12 + Math.random() * 18}s`;

  background.appendChild(star);
}

//Evento del envio de contactanos

document.getElementById("enviarMensaje").addEventListener("click", function () {
  const nombre = document.querySelector("#nombre input").value.trim();
  const email = document.querySelector("#email-contactanos input").value.trim();
  const phone = document.querySelector("#phone input").value.trim();
  const mensaje = document.querySelector("#mensajito textarea").value.trim();
  const privacidad = document.querySelector("#terms input").checked; // Verifica si el checkbox está marcado

  // Validaciones
  if (nombre === "") {
    alert("Por favor ingresa tu nombre, este campo no puede quedar vacío");
  } else if (phone === "") {
    alert("Por favor ingresa tu teléfono, este campo no puede quedar vacío");
  } else if (phone.length < 10 || phone.length > 12) {
    alert("Ingresa un número de teléfono válido");
  } else if (email === "") {
    alert("¡Alto, este campo (Email) no puede estar vacío!");
  } else if (!email.includes("@")) {
    alert(
      "Correo no aceptado, intentalo de nuevo, revisa que tu correo esté bien escrito"
    );
  } else if (mensaje === "") {
    alert(
      "Para continuar escribe tu mensaje de contacto, ¿En qué podemos ayudarte?"
    );
  } else if (!privacidad) {
    alert("Acepta nuestros términos de privacidad antes de enviar :)");
  } else {
    alert(
      "Gracias por contactarte con IBL, " +
        nombre +
        ". Uno de nuestros asesores te atenderá a la brevedad. ¡También puedes encontrarnos en nuestras redes sociales!"
    );
  }
});

/*EMAIL*/
// Inicializa EmailJS con tu User ID
(function () {
  emailjs.init("gmiJc0yrehImR_piP"); // Sustituye "TU_PUBLIC_KEY" con la clave pública correcta (estaba esta) oKasd2SLlI5zI9Ks_

})();

// Función para validar y enviar los datos del formulario
document
  .getElementById("enviarMensaje")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores de los inputs
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document
      .querySelector("#email-contactanos input")
      .value.trim();
    const phone = document.querySelector("#phone input").value.trim();
    const mensaje = document.querySelector("#mensajito textarea").value.trim();
    const privacidad = document.querySelector("#terms input").checked;
    

    // Validaciones del formulario
    if (nombre === "") {
      alert("Por favor ingresa tu nombre, este campo no puede quedar vacío");
    } else if (phone === "") {
      alert("Por favor ingresa tu teléfono, este campo no puede quedar vacío");
    } else if (phone.length < 10 || phone.length > 12) {
      alert("Ingresa un número de teléfono válido");
    } else if (email === "") {
      alert("¡Alto, este campo (Email) no puede estar vacío!");
    } else if (!email.includes("@")) {
      alert(
        "Correo no aceptado, intentalo de nuevo, revisa que tu correo esté bien escrito"
      );
    } else if (mensaje === "") {
      alert(
        "Para continuar escribe tu mensaje de contacto, ¿En qué podemos ayudarte?"
      );
    } else if (!privacidad) {
      alert("Acepta nuestros términos de privacidad antes de enviar :)");
    } else {
      // Si todas las validaciones pasan, enviamos el correo

      // Crea el objeto de datos que se enviarán en el correo
      const datosFormulario = {
        nombre: nombre,
        email: email,
        telefono: phone,
        mensaje: mensaje,
      };
      // Enviar el correo utilizando EmailJS
      emailjs.send("service_nucnjfv", "template_mm46z4u", datosFormulario).then(
        function (response) {
          alert(
            "¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente."
          );
          window.location.href = "index.html"; 
          console.log("Correo enviado: ", response);
        },
        function (error) {
          alert(
            "¡Algo salió mal! No pudimos enviar tu mensaje. Intenta de nuevo."
          );
          console.log("Error al enviar el correo: ", error);
        }
      );
    }
  });
