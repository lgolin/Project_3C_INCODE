# Project_3C_INCODE

🚩 Step 1 : Build your database
The schedule data will be stored in a database: MySQL. We call MySQL a relational database because the data is formatted according to a very precise schema, defined before adding any data.
Creating a database therefore starts by elaborating the data schema, i.e. what data will be stored and in what form.
This step is crucial because it determines the right logic for your application. For this first project we have developed the data schema for you, but in the future that tasks will be yours.
So you need to create a MySQL database with Node.Js and connect to it (see here if you don't know how to do this) before creating your table.
For this project, you need a 'schedule' table.
Your 'schedule' table will be composed of the following fields: 
- a unique key (ID),
- a username,
- the day of the week (1 for Monday, 2 for Tuesday... 7 for Sunday),
- a start time
- and an end time (both TIME type).

🚩 Step 2 : Build the two routes
Create a route "/" that will retrieve the list of existing schedules from the database and display them.
Create a route "/new" which will implement two actions:
- on GET, a form to add a schedule will be displayed.
- on POST, the form data will be saved in the database. You will then redirect to the form.

🚩 Step 3 : Create the corresponding views
You need to implement two views: 
- the view that displays all schedules, which will simply be presented as < USER NAME - day start_time - end_time > For example: < MAUD - Tuesday 8:30-12:30 >
- the view that displays the form.
On each of your views, there will be a link to the other view.
