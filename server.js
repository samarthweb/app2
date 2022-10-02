/*********************************************************************************
* web322 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Samarth Patel  Student ID: 150061208   Date: 2 october 2022
*
* Online (Cyclic) URL:
* 
* 
* 
*
********************************************************************************/ 







var express = require('express');
var connect = require('path');
var value = require('./data-service.js');
var assignment = express();


value
  .initialize()
  .then(function () {assignment.listen(HTTP_PORT, onHTTPStart);})
  .catch(function (err) {console.log('CATCH ERROR' + err);});
  
var HTTP_PORT = process.env.PORT || 8080;

assignment.get('/', function (req, res) {res.sendFile(connect.join(__dirname, '/views/home.html'));});

assignment.use(express.static('public'));

assignment.get('/employees', function (req, res) {value.getAllEmployees().then((info) => {res.json(info);});});

assignment.get('/about', function (req, res) {res.sendFile(connect.join(__dirname, '/views/about.html'));});

assignment.get('/managers', function (req, res) { value.getManagers().then((info) => {res.json(info);});});

assignment.get('/departments', function (req, res) {value.getDepartments().then((info) => {res.json(info);});});

assignment.use(function (req, res) {res.status(404).send('NOT AVAILABLE');});

function onHTTPStart() {
  console.log('server listening on: ' + HTTP_PORT);
}

