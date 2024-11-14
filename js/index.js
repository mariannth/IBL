
 // Captura el formulario y el campo de fecha
 const form = document.getElementById('appointment-form');
 const dateInput = document.getElementById('appointment-date');

 // Evento de envío del formulario
 form.addEventListener('submit', (event) => {
     event.preventDefault(); // Evita el envío para fines de demostración
     const selectedDate = dateInput.value;
     if (selectedDate) {
         alert(`Has seleccionado la fecha: ${selectedDate}`);
     } else {
         alert("Por favor, selecciona una fecha.");
     }
 });
