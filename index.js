const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

// Don't know what is it
app.use(express.json());

// Create database connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
