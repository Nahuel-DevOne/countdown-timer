const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('#days');
const hoursSpan = clock.querySelector('#hours');
const minutesSpan = clock.querySelector('#minutes');
const secondsSpan = clock.querySelector('#seconds');

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
    
    const timeinterval = setInterval(updateClock, 1000);
    
    function updateClock() {
        const t = getTimeRemaining(endtime);
        
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
}

const deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
// initializeClock(deadline);



