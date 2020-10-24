export class Company {
  // here we can "forward declare" variables
  timerCount: number = 0;
  timer: Object = {};

  constructor() {
    this.init();
  }

  init() {
    console.log('Hi! I am a new Company');
    // Handle random events over time
    // Create random employees
    this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
  }

  onTimerInterval() {
    this.timerCount++;
    console.log('Tick!', this.timerCount);
    this.randomEvent();
  }

  randomEvent() {};
}