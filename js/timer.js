const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const startDate = new Date(2021, 0, 1);
let intervalId = null;

timer(startDate);

function timer(start) {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltatime = start - currentTime;
    refs.days.textContent = getDays(deltatime);
    refs.hours.textContent = getHours(deltatime);
    refs.mins.textContent = getMins(deltatime);
    refs.secs.textContent = getSecs(deltatime);
  }, 1000);
}

function getDays(time) {
  return pad(Math.floor(time / 1000 / 60 / 60 / 24));
}

function getHours(time) {
  return pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
}
function getMins(time) {
  return pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
}
function getSecs(time) {
  return pad(Math.floor((time % (1000 * 60)) / 1000));
}

function pad(value) {
  return String(value).padStart(2, '0');
}
