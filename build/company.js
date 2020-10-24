"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company = /** @class */ (function () {
    function Company() {
        // here we can "forward declare" variables
        this.timerCount = 0;
        this.timer = {};
        this.init();
    }
    Company.prototype.init = function () {
        console.log('Hi! I am a new Company');
        // Handle random events over time
        // Create random employees
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    };
    Company.prototype.onTimerInterval = function () {
        this.timerCount++;
        console.log('Tick!', this.timerCount);
    };
    return Company;
}());
exports.Company = Company;
