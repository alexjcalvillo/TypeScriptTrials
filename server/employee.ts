import { Position } from './position';

export class Employee {
  // ACCESS MODIFIERS -> "public" && "private"
  // A topic related to "encapsulation"
  private firstName: string;
  private lastName: string;
  private salary: number;
  private position: Position;

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    position: Position
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.position = position;
  }
}
