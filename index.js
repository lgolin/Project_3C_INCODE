const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Don't know what is it
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// pug connection
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Create database connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'incode',
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
  let sql = 'SELECT * FROM schedule ORDER BY id asc';
  con.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render('schedule', {schedules: results, days, title: 'Schedules'});
  });
});

app.get('/new', function (req, res) {
  res.render('addSchedule', {days, title: 'Add New Schedule'});
});

app.post('/new', (req, res) => {
  console.log(req.body);

  let username = req.body.username;
  let day = req.body.day;
  let start_time = req.body.start;
  let end_time = req.body.end;
  con.query(
    'INSERT INTO schedule(username,day,start_time,end_time) VALUES(?,?,?,?)',
    [username, day, start_time, end_time],
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      console.log('New schedule has been added');

      res.redirect('/');
    }
  );
});

// localhost
app.listen('3000', () => {
  console.log('server started on port 3000');
});
