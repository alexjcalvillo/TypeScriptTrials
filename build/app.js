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
    res.send('myDopeCompany');
});
app.get('/api/staff/names/first', function (req, res) {
    res.send({
        first_names: myDopeCompany.getFirstNames(),
    });
});
app.get('/api/staff/names/last', function (req, res) {
    res.send({
        last_names: myDopeCompany.getLastNames(),
    });
});
app.get('/api/staff/names/full', function (req, res) {
    res.send({
        last_names: myDopeCompany.getFullNames(),
    });
});
app.get('/api/salary/total', function (req, res) {
    res.send({
        total_salaries: myDopeCompany.getTotalSalaries(),
    });
});
app.get('/api/salary/all', function (req, res) {
    res.send({
        all_salaries: myDopeCompany.getAllSalaries(),
    });
});
app.get('/api/history/full', function (req, res) {
    res.send({
        full_history: myDopeCompany.getHistoryLog(),
    });
});
app.listen(5000, function () {
    console.log("Listening on PORT: 5000");
});
