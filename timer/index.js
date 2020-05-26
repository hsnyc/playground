const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
let offSet = 0;
let offSetVal;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    offSet = 0;
    duration = totalDuration;
    offSetVal = -(perimeter * 0.02)/duration;
  },
  onTick(timeRemaining) {
    offSet = offSet + offSetVal;
    
    circle.setAttribute(
      'stroke-dashoffset', offSet
    );
  },
  onComplete() {
    offSet = 0;
    console.log('Timer is completed');
  }
});
