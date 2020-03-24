const express = require('express');
const app = express();
const mongoose= require('mongoose');
const session = require('express-session');
const flash = require('express-flash');

mongoose.connect('mongodb://localhost/Beltexam', {useNewUrlParser: true});
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

require('./server/config/routes.js')(app);
app.listen(8000, () => console.log("Listening on port 8000")); 