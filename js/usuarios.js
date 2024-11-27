document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm"); // Selecciona el formulario por su ID
    const emailInput = document.getElementById("email"); // Campo de correo
    const passwordInput = document.getElementById("password"); // Campo de contraseña
  
    // Validar el formulario cuando se envíe
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
      const email = emailInput.value.trim(); // Obtener el valor del email
      const password = passwordInput.value.trim(); // Obtener el valor de la contraseña
  
      // Validar campos vacíos
      if (!email || !password) {
        showAlert("Por favor, complete todos los campos.", "danger");
        return;
      }
  
      // Validar formato del correo electrónico
      if (!validateEmail(email)) {
        showAlert("Por favor, ingrese un correo electrónico válido.", "danger");
        return;
      }
  
      // Verificar usuario en LocalStorage
      const storedUser = JSON.parse(localStorage.getItem("user")); // Obtiene datos del usuario en LocalStorage
      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        showAlert("Correo electrónico o contraseña incorrectos.", "danger");
        return;
      }
  
      // Inicio de sesión exitoso
      showAlert("Inicio de sesión exitoso. Redirigiendo...", "success");
  
      // Simular un breve tiempo de espera antes de redirigir
      setTimeout(() => {
        window.location.href = "./index.html"; // Redirigir a la página de inicio
      }, 1500);
    });
  
    // Función para mostrar alertas
    function showAlert(message, type) {
      const alertDiv = document.createElement("div");
      alertDiv.className = `alert alert-${type} mt-3`; // Clase de alerta de Bootstrap
      alertDiv.textContent = message;
      form.appendChild(alertDiv); // Añade la alerta al formulario
  
      // Elimina la alerta después de 3 segundos
      setTimeout(() => {
        alertDiv.remove();
      }, 3000);
    }
  
    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
      return emailRegex.test(email);
    }
  });
  

  localStorage.setItem(
    "user",
    JSON.stringify({ email: "usuario@ejemplo.com", password: "123456" })
  );
  