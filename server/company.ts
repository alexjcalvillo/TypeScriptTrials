import { Employee } from './employee';
import { Position } from './modules/Enums/position';

export class Company {
  private readonly NUM_OF_STARTING_EMPLOYEES: number = 10;

  private employees: Employee[] = [];

  // here we can "forward declare" variables
  private timerCount: number = 0;
  private timer: Object = {};

  constructor() {
    this.init();
  }

  private init(): void {
    console.log('Hi! I am a new Company');
    // Handle random events over time
    // Create random employees

    while (this.employees.length < this.NUM_OF_STARTING_EMPLOYEES) {
      this.employees.push(this.createEmployee());
    }
    console.log(this.employees);
    // start a timer, set to 1:1 seconds
    this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
  }

  private onTimerInterval(): void {
    this.timerCount++;
    this.randomEvent();
  }

  private randomEvent(): void {}

  // function signature says private method, method name, returns type "Employee"
  private createEmployee(): Employee {
    const newEmployee = new Employee(
      'Alex',
      'Calvillo',
      60000,
      Position.ANALYST
    );
    return newEmployee;
  }
}
