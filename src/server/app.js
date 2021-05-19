const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.set('trust proxy', 1)
app.use(cookieParser())
app.use(
    session({
        secret: 'pangea',
        resave: true,
        saveUninitialized: true
    })
)

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

function customHeaders(req, res, next) {
    app.disable('x-powered-by');
    res.setHeader('X-Powered-By', 'Pangea Publisher Server');
    next();
}

app.use(customHeaders);

const publisherApi = require('../api/publisher.api')

app.use('/', publisherApi)

module.exports = app
