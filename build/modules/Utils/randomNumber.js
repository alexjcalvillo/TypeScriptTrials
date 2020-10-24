"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
exports.randomNumber = randomNumber;
