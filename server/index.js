'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')
const helmet = require('helmet')
const Ddos = require('ddos');
const DDOSparams= {
    maxcount: 30,
    burst: 5,
    limit: 20,
    maxexpiry: 120,
    checkinterval: 1,
    errormessage: "Error",
    testmode: false
  }
var ddos = new Ddos(DDOSparams);

const app = express()
// Express configuration
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet());
app.use(ddos.express);
// Fallback to index.html
app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})

// Run the server
app.listen(8080, () => console.log('Express running on port 8080'))
