// Espera al botón para revisar respuestas
document.getElementById('checkBtn').addEventListener('click', () => {
  // Trae el formulario
  const form = document.getElementById('quiz-form');

  // Respuestas correctas
  const correctAnswers = {
    q1: 'switch',
    q2: 'const',
    q3: 'forEach'
  };

  let score = 0;

  // Revisa cada pregunta
  for (let key in correctAnswers) {
    const selected = form[key].value;
    if (selected === correctAnswers[key]) {
      score++;
    }
  }

  // Muestra resultado
  const result = document.getElementById('result');

  if (score === 3) {
    result.innerHTML = `
      ✅ ¡Perfecto! Acertaste todas.<br><br>
      🎉 ¡Has vencido a CRUDY!<br><br>
      👑 Y un aplauso especial para nuestro Team Leader,<br>
      por su paciencia, guía y genialidad. ¡Gracias por ser tan increíble! 💚
    `;
    result.style.color = 'limegreen';
  } else {
    result.innerHTML = `⚠️ Aciertos: ${score} de 3. Intenta mejorar.`;
    result.style.color = 'orange';
  }
});
