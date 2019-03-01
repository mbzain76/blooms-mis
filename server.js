const express = require('express');
const bodyParser = require('body-parser');

// initialize express app
const app = express();

// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(...)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');    
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const port = process.env.PORT || 5000
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to bloomsfield crud application."});
});

//Require the students routes
require('./routes/student.routes.js')(app);


