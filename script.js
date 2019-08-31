
let hours = 0
let minutes = 0
let seconds = 0
let timer
let isRunning = false

function updateTime () {
  if (seconds == 59) {
    seconds = 0
    if (minutes === 59) {
      minutes = 0
      hours++
    } else {
      minutes++
    }
  } else {
    seconds++
  }
  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('hours').innerHTML = hours;
}

function startTime () {
  if (isRunning === false) {
    timer = setInterval(updateTime, 1000)
    isRunning = true
  }
}

function stopTime () {
  clearInterval(timer)
  isRunning = false
}

function resetTime () {
  hours = 0
  minutes = 0
  seconds = 0
  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('hours').innerHTML = hours;
  stopTime()
}

