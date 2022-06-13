
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var NhaHangRoute = require('./BE/Route/NhaHangRoute');
var Food = require('./BE/Route/Food')
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', NhaHangRoute);
app.use('/',Food);

app.listen(process.env.PORT || 5000);

module.exports = app;