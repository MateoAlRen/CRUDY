const buttons = document.querySelectorAll('.color-btn');
const message = document.getElementById('message');
const startBtn = document.getElementById('start-btn');

let sequence = [];
let playerSequence = [];
let waitingForPlayer = false;

const colors = ['red', 'green', 'blue', 'yellow'];

function generateSequence(length) {
  const seq = [];
  let i = 0;
  while (i < length) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    seq.push(colors[randomIndex]);
    i++;
  }
  return seq;
}

function lightUpButton(color, callback) {
  const btn = [...buttons].find(b => b.dataset.color === color);
  if (btn) {
    btn.classList.add('light-up');
    setTimeout(function () {
      btn.classList.remove('light-up');
      setTimeout(callback, 250);
    }, 500);
  } else {
    callback();
  }
}

function showSequence() {
  disableButtons();
  message.textContent = 'Observa la secuencia...';

  let i = 0;
  function showNext() {
    if (i < sequence.length) {
      lightUpButton(sequence[i], function () {
        i++;
        showNext();
      });
    } else {
      message.textContent = 'Tu turno: reproduce la secuencia.';
      enableButtons();
      waitingForPlayer = true;
      playerSequence = [];
    }
  }
  showNext();
}

function disableButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

function enableButtons() {
  buttons.forEach(btn => btn.disabled = false);
}

function checkSequence(color) {
  playerSequence.push(color);
  const currentIndex = playerSequence.length - 1;

  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    waitingForPlayer = false;
    disableButtons();
    message.textContent = '¡Error! Secuencia incorrecta. Intenta de nuevo.';
    startBtn.disabled = false;
    return;
  }

  if (playerSequence.length === sequence.length) {
    waitingForPlayer = false;
    disableButtons();
    message.textContent = '¡Correcto! Has superado el desafío.';
    startBtn.disabled = false;

    // Redirigir a otra página después de 1 segundo
    setTimeout(() => {
      window.location.href = '../nivel4/index.html'; // ← aquí redirige
    }, 1000);
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    if (!waitingForPlayer) return;
    const color = this.dataset.color;

    this.classList.add('light-up');
    setTimeout(() => this.classList.remove('light-up'), 300);

    checkSequence(color);
  });
});

startBtn.addEventListener('click', function () {
  startBtn.disabled = true;
  sequence = generateSequence(4);
  showSequence();
});
