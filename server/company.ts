import { Employee } from './employee';
import { Position } from './modules/Enums/position';
import { HistoryLog } from './modules/Utils/historyLog';
import { randomNumber } from './modules/Utils/randomNumber';

export class Company {
  private readonly NUM_INITIAL_STAFF: number = 10;

  private employees: Employee[] = [];

  private historyLog: HistoryLog = new HistoryLog();

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
    this.employees = this.hireInitialStaff();
    // start a timer, set to 1:1 seconds
    this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
  }

  private onTimerInterval(): void {
    this.timerCount++;
    this.randomEvent();
  }

  // Random events handled here with switch case with 6% chance to hire,
  // 2% chance for an employee to quit or get fired, and 1% chance for promotion
  private randomEvent(): void {
    const randomChance: number = randomNumber(1, 100);

    switch (randomChance) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        this.employees.push(this.createEmployee());
        break;
      case 7:
        this.removeEmployee(false);
        break;
      case 8:
        this.promoteEmployee();
        break;
      case 9:
        this.removeEmployee(true);
        break;
      default:
        break;
    }
  }

  // Initial creation of staff with createEmployee and hireInitialStaff
  // function signature says private method, method name, returns type "Employee"
  private createEmployee(): Employee {
    const newEmployee = new Employee();

    const positionLevel: number = randomNumber(0, 5);
    for (let i = 0; i < positionLevel; i++) {
      newEmployee.promote();
    }
    this.historyLog.addNewEmployee(newEmployee);
    return newEmployee;
  }

  private hireInitialStaff(): Employee[] {
    const newEmployeeArray: Employee[] = [];
    for (let i = 0; i < this.NUM_INITIAL_STAFF; i++) {
      newEmployeeArray.push(this.createEmployee());
    }
    return newEmployeeArray;
  }

  // random events which will trigger if case is rolled in randomEvent
  private promoteEmployee(): void {
    const randomEmployeeNumber: number = randomNumber(
      0,
      this.employees.length - 1
    );
    const randomEmployee: Employee = this.employees[randomEmployeeNumber];
    randomEmployee.promote();
    this.historyLog.promoteEmployee(randomEmployee);
  }

  private removeEmployee(quit?: boolean): void {
    if (this.employees.length <= 1) return;

    const randomEmployeeNumber: number = randomNumber(
      0,
      this.employees.length - 1
    );
    const randomEmployee: Employee = this.employees[randomEmployeeNumber];

    if (quit) {
      this.historyLog.quitEmployee(randomEmployee);
    } else {
      this.historyLog.fireEmployee(randomEmployee);
    }

    this.employees.splice(randomEmployeeNumber, 1);
  }
}
