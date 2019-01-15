const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '<< your host >>',
    user: '<< your database username >>',
    password: '<< your database password >>',
    database: '<< your database >>'
});
const app = express();
const port = 3000;

connection.connect();

app.use(bodyParser.urlencoded({
    extended: true
}));

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cookieParser());

app.get('/', (req, res) => {
    // res.clearCookie('status');
    if (req.cookies && req.cookies.status === "in") {
        app.use('/', express.static(__dirname + '/client'));
        res.sendFile(__dirname + '/client/index.html');
    } else {
        app.use('/', express.static(__dirname + '/login'));
        res.sendFile(__dirname + '/login/index.html');
    }
});

app.post('/login', jsonParser, (req, res) => {
    if (req.body.username === "<< your username >>" && req.body.password === "<< your password >>") {
        res.cookie("status", 'in', {expire: 30 * 86400 * 1000 + Date.now()}); 
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

app.get('/dashboard', (req, res) => {
    if (req.cookies && req.cookies.status === "in") {
        app.use('/', express.static(__dirname + '/client'));
        res.sendFile(__dirname + '/client/index.html');
    } else {
        app.use('/', express.static(__dirname + '/login'));
        res.sendFile(__dirname + '/login/index.html');
    }
});

app.post('/submit', jsonParser, ((req, res) => {
    try {
        if (req.cookies && req.cookies.status === "in") {
            submit(req.body.payment_method, req.body.card_last_4_digits, req.body.price, req.body.detail);
            res.sendStatus(200);
        } else { throw err; }
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
}));

app.post('/logout', ((req, res) => {
    res.clearCookie('status');
    res.sendStatus(200);
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function submit(method, digits, price, detail) {
    connection.query(`INSERT INTO expenditure (payment_method, card_4_digits, price, memo)\
                      values ('${method}', '${digits}', ${price}, '${detail}')`, (err, rows, fields) => {
        if (err) throw err;
        console.log("success!");
    });
}