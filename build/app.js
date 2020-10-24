"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var company_1 = require("./company");
// app is an express Application type -> will refer
// to methods we call from express
var app = express();
// const alexsNumber: number = 27; STRONG TYPING with :number syntax
var myDopeCompany = new company_1.Company();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(5000, function () {
    console.log("Listening on PORT: 5000");
});
