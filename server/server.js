const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/dbconfig');
const router = require('./Router/todoRouter.js')
// read db
// read router

const port = 1332;
const ip = 'localhost';



const app = express();


app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan('dev'))
    .use(router);




app.listen(port, ip, () => {
    console.log("server listening on port:" + port)
})


// app.get('/todo', function(req, res){
// 	res.status(200).send("works here")
// })

module.exports = app;