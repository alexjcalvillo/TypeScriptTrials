import { Position } from './modules/Enums/position';

export class Employee implements IPerson {
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

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
