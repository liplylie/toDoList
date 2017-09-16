var db = require('../dbconfig.js');
var Sequelize = require('sequelize');

var Todo = db.define('article', {
	todo: Sequelize.TEXT
});

Todo.sync()
.then(()=>{console.log("successful add table")})
.catch(()=>{console.log("failed adding table")})

module.exports = Todo;