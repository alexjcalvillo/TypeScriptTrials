"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var employee_1 = require("./employee");
var historyLog_1 = require("./modules/Utils/historyLog");
var randomNumber_1 = require("./modules/Utils/randomNumber");
var Company = /** @class */ (function () {
    function Company() {
        this.NUM_INITIAL_STAFF = 10;
        this.employees = [];
        this.historyLog = new historyLog_1.HistoryLog();
        // here we can "forward declare" variables
        this.timerCount = 0;
        this.timer = {};
        this.init();
    }
    Company.prototype.init = function () {
        console.log('Hi! I am a new Company');
        // Handle random events over time
        // Create random employees
        this.employees = this.hireInitialStaff();
        // start a timer, set to 1:1 seconds
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    };
    Company.prototype.onTimerInterval = function () {
        this.timerCount++;
        this.randomEvent();
    };
    // Random events handled here with switch case with 6% chance to hire,
    // 2% chance for an employee to quit or get fired, and 1% chance for promotion
    Company.prototype.randomEvent = function () {
        var randomChance = randomNumber_1.randomNumber(1, 100);
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
    };
    // Initial creation of staff with createEmployee and hireInitialStaff
    // function signature says private method, method name, returns type "Employee"
    Company.prototype.createEmployee = function () {
        var newEmployee = new employee_1.Employee();
        var positionLevel = randomNumber_1.randomNumber(0, 5);
        for (var i = 0; i < positionLevel; i++) {
            newEmployee.promote();
        }
        this.historyLog.addNewEmployee(newEmployee);
        return newEmployee;
    };
    Company.prototype.hireInitialStaff = function () {
        var newEmployeeArray = [];
        for (var i = 0; i < this.NUM_INITIAL_STAFF; i++) {
            newEmployeeArray.push(this.createEmployee());
        }
        return newEmployeeArray;
    };
    // random events which will trigger if case is rolled in randomEvent
    Company.prototype.promoteEmployee = function () {
        var randomEmployeeNumber = randomNumber_1.randomNumber(0, this.employees.length - 1);
        var randomEmployee = this.employees[randomEmployeeNumber];
        randomEmployee.promote();
        this.historyLog.promoteEmployee(randomEmployee);
    };
    Company.prototype.removeEmployee = function (quit) {
        if (this.employees.length <= 1)
            return;
        var randomEmployeeNumber = randomNumber_1.randomNumber(0, this.employees.length - 1);
        var randomEmployee = this.employees[randomEmployeeNumber];
        if (quit) {
            this.historyLog.quitEmployee(randomEmployee);
        }
        else {
            this.historyLog.fireEmployee(randomEmployee);
        }
        this.employees.splice(randomEmployeeNumber, 1);
    };
    Company.prototype.getFirstNames = function () {
        var firstNames = [];
        for (var i = 0; i < this.employees.length; i++) {
            firstNames.push(this.employees[i].getFirstName());
        }
        return firstNames;
    };
    Company.prototype.getLastNames = function () {
        var lastNames = [];
        for (var i = 0; i < this.employees.length; i++) {
            lastNames.push(this.employees[i].getLastName());
        }
        return lastNames;
    };
    Company.prototype.getFullNames = function () {
        var fullNames = [];
        for (var i = 0; i < this.employees.length; i++) {
            fullNames.push(this.employees[i].getFullName());
        }
        return fullNames;
    };
    Company.prototype.getTotalSalaries = function () {
        var totalSalary = 0;
        for (var i = 0; i < this.employees.length; i++) {
            totalSalary += this.employees[i].getSalary();
        }
        return totalSalary;
    };
    Company.prototype.getAllSalaries = function () {
        var allSalaries = [];
        for (var i = 0; i < this.employees.length; i++) {
            allSalaries.push(this.employees[i].getSalary());
        }
        return allSalaries;
    };
    Company.prototype.getHistoryLog = function () {
        return this.historyLog.getHistory();
    };
    return Company;
}());
exports.Company = Company;
