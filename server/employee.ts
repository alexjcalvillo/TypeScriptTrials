export class Employee {
  // ACCESS MODIFIERS -> "public" && "private"
  // A topic related to "encapsulation"
  public firstName: string;
  public lastName: string;
  private salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}
