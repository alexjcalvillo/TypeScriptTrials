"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var employee_1 = require("./employee");
var Company = /** @class */ (function () {
    function Company() {
        this.NUM_OF_STARTING_EMPLOYEES = 10;
        this.employees = [];
        // here we can "forward declare" variables
        this.timerCount = 0;
        this.timer = {};
        this.init();
    }
    Company.prototype.init = function () {
        console.log('Hi! I am a new Company');
        // Handle random events over time
        // Create random employees
        while (this.employees.length < this.NUM_OF_STARTING_EMPLOYEES) {
            this.createEmployee();
        }
        console.log(this.employees);
        // start a timer, set to 1:1 seconds
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    };
    Company.prototype.onTimerInterval = function () {
        this.timerCount++;
        console.log('Tick!', this.timerCount);
        this.randomEvent();
    };
    Company.prototype.randomEvent = function () { };
    Company.prototype.createEmployee = function () {
        var newEmployee = new employee_1.Employee('Alex', 'Calvillo', 60000);
        this.employees.push(newEmployee);
    };
    return Company;
}());
exports.Company = Company;
