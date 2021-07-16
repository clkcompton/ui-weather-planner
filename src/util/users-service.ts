

// // import mysql from 'mysql';
// // import express from 'express';
// const mysql = require('mysql');
// // const express = require('express');
// // const bodyParser = require('body-parser');

// // var app = express();
// // app.use(bodyParser.json());

// //MySQL details
// var mysqlConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'weather-planner',
//   password: 'weather-planner',
//   database: 'weather-planner',
//   multipleStatements: true
//   });

// mysqlConnection.connect(function(err) {
//   if(!err) {
//   console.log('Connection Established Successfully');
//   } else {
//   console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
//   }
// });

// // export class UsersService {
//  export function getAllUsers() {
//     mysqlConnection.query("SELECT * FROM user", (err, rows, fields)=>{
//       if(!err){
//         console.log("Rows: " + rows);
//       } else {
//         console.log(err);
//       }
//     })
//   }
// // }
