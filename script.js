// Configuración del juego
var score = 0;
var timeLeft = 30;
var timerId;

// Obtener elementos HTML
var scoreElem = document.getElementById("score");
var timerElem = document.getElementById("timer");
var btn = document.getElementById("btn");

// Función para actualizar el contador de puntos
function updateScore() {
  score++;
  scoreElem.innerHTML = score;
}

// Función para actualizar el contador de tiempo
function updateTime() {
  timeLeft--;
  timerElem.innerHTML = timeLeft + " segundos";

  // Si se acaba el tiempo, se detiene el juego
  if (timeLeft === 0) {
    clearInterval(timerId);
    btn.disabled = true;
    alert("¡Juego terminado! Conseguiste: USD" + score);
  }
}

// Comenzar el juego cuando se hace clic en el botón
btn.addEventListener("click", function() {
  updateScore();
});

// Iniciar el contador de tiempo
timerId = setInterval(updateTime, 1000);

// Seleccionar el botón de reinicio y agregar un escucha de eventos
const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartGame);

function restartGame() {
  // Restablecer las variables de juego
  score = 0;
  timeLeft = 30;

  // Actualizar elementos del DOM
  scoreElem.textContent = score;
  timerElem.textContent = timeLeft + " segundos";
  btn.disabled = false;

  // Reiniciar el contador de tiempo
  clearInterval(timerId);
  timerId = setInterval(updateTime, 1000);
}

  const bgmusic = document.getElementById("bgmusic");
  const playButton = document.getElementById("playButton");

  function togglePlay() {
    if (bgmusic.paused) {
      bgmusic.play();
      playButton.textContent = "Pause";
    } else {
      bgmusic.pause();
      playButton.textContent = "Play";
    }
  }
