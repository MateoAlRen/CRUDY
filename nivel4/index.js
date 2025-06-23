// Selecciona todos los botones de opciones y el elemento de retroalimentación
const buttons = document.querySelectorAll('.option-btn');
const feedback = document.getElementById('feedback');

// Contador de intentos del usuario
let attempts = 0;
const maxAttempts = 2;

// Agrega evento clic a cada botón de opción
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const choice = button.dataset.choice;
    attempts++;

    // Verifica si la opción seleccionada es la correcta
    if (choice === 'C') {
      feedback.textContent = '✅ Correcto. Has entendido la lógica fractal.';
      feedback.style.color = 'limegreen';
      
      // Espera 1.5 segundos y redirige al nivel siguiente
      setTimeout(() => {
        window.location.href = '../nivel5/index.html';
      }, 1500);
    } else {
      // Si aún tiene intentos, muestra mensaje de error leve
      if (attempts < maxAttempts) {
        feedback.textContent = '❌ Incorrecto. Intenta de nuevo.';
        feedback.style.color = 'orange';
      } else {
        // Si se supera el límite de intentos, muestra error y reinicia el nivel
        feedback.textContent = '💀 Has fallado demasiadas veces. Reiniciando nivel...';
        feedback.style.color = 'red';
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  });
});
