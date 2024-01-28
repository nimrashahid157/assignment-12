let timer;
let minutes = 25;
let seconds = 0;

function startTimer(type) {
  clearInterval(timer);
  if (type === 'break') {
    minutes = 5;
  } else {
    minutes = 25;
  }
  seconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function toggleTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert('Timer Completed!');
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateTimerDisplay();
}

function stopTimer() {
  clearInterval(timer);
}

function restartTimer() {
  startTimer('focus');
  toggleTimer();
}

function openSettings() {
  const modal = document.getElementById('settingsModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('settingsModal');
  modal.style.display = 'none';
}

function resetChanges() {
  document.getElementById('focusTime').value = '25';
  document.getElementById('breakTime').value = '5';
}

function saveChanges() {
  const focusTimeInput = document.getElementById('focusTime');
  const breakTimeInput = document.getElementById('breakTime');
  
  const focusTime = parseInt(focusTimeInput.value);
  const breakTime = parseInt(breakTimeInput.value);

  if (!isNaN(focusTime) && focusTime >= 1) {
    minutes = focusTime;
  }

  if (!isNaN(breakTime) && breakTime >= 1) {
    minutes = breakTime;
  }

  closeModal();
  updateTimerDisplay();
}

