This is a fun restaurant app that lets users devour burgers.  Users can be input the names of burgers they'd like to eat or select from a list of burgers from the menu.  Whenever a user eats a burger, the burger name will move from the menu on the left side of the page to the right side of the page.


This app was developed with the MVC structure and uses the following:

javascript & jquery
virtual server
MySQL database
ORM
npm packages: express, handlebars, method-override, body-parser, MySQL

This app is deployed in Heroku and can be accessed at the link:
https://handlebarburger.herokuapp.com/

The MVC structure is as follows:
.
├── config
│   ├── connection.js - establishes connection to MySQL db
│   └── orm.js - defines the db queries using Object Relational Mapping 
│ 
├── controllers
│   └── burgers_controller.js - controls routing for all client requests
│
├── db
│   ├── schema.sql - defines MySQL db and table structure 
│   └── seeds.sql - inputs initial data into db
│
├── models
│   └── burger.js - calls the ORM and defines the callback function
│ 
├── node_modules - NPM code for modules
│ 
├── package.json - defines dependencies
│
├── public
│   └── assets
│       ├── audio - audio files for app
│	 	├── css
│       │   └── burger_style.css - css code for pages
│       └── img - all images for app
│          
│  
│
├── server.js
│
└── views
    ├── index.handlebars - html & handlebars code for body
    └── layouts
        └── main.handlebars - html and handlebars main file with javascript
