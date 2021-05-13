const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

// Don't know what is it
app.use(express.json());

// pug connection
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

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

// Routes

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM schedule ORDER BY id_user asc';
  con.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render('schedule', {schedules: results, days, title: 'Schedules'});
  });
});
