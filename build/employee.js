"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var position_1 = require("./modules/Enums/position");
var randomNumber_1 = require("./modules/Utils/randomNumber");
var meritIncrease_1 = require("./modules/Enums/meritIncrease");
var data = __importStar(require("./modules/Data/names.json"));
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, salary, position) {
        this.firstName = firstName ? firstName : this.generateFirstName();
        this.lastName = lastName ? lastName : this.generateLastName();
        this.salary = salary ? salary : randomNumber_1.randomNumber(40000, 60000);
        this.position = position ? position : position_1.Position.ASSOCIATE;
    }
    Employee.prototype.generateFirstName = function () {
        return data.first_names[randomNumber_1.randomNumber(0, data.first_names.length - 1)];
    };
    Employee.prototype.generateLastName = function () {
        return data.last_names[randomNumber_1.randomNumber(0, data.last_names.length - 1)];
    };
    Employee.prototype.promote = function () {
        switch (this.position) {
            case position_1.Position.ASSOCIATE:
                this.position = position_1.Position.ANALYST;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.ANALYST);
                break;
            case position_1.Position.ANALYST:
                this.position = position_1.Position.SENIOR_ANALYST;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.SENIOR_ANALYST);
                break;
            case position_1.Position.SENIOR_ANALYST:
                this.position = position_1.Position.MANAGER;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.MANAGER);
                break;
            case position_1.Position.MANAGER:
                this.position = position_1.Position.SENIOR_MANAGER;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.SENIOR_MANAGER);
                break;
            case position_1.Position.SENIOR_MANAGER:
                this.position = position_1.Position.DIRECTOR;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.DIRECTOR);
                break;
            case position_1.Position.DIRECTOR:
                this.position = position_1.Position.VICE_PRESIDENT;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.VICE_PRESIDENT);
                break;
            case position_1.Position.VICE_PRESIDENT:
                this.position = position_1.Position.SENIOR_VICE_PRESIDENT;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.SENIOR_VICE_PRESIDENT);
                break;
            case position_1.Position.SENIOR_VICE_PRESIDENT:
                this.position = position_1.Position.PRESIDENT;
                this.salary = this.meritIncrease(meritIncrease_1.MeritIncrease.PRESIDENT);
                break;
            default:
                break;
        }
    };
    Employee.prototype.meritIncrease = function (percentage) {
        return Math.floor(this.salary * (1 + percentage));
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
