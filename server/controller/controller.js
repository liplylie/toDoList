// connect to database
const ToDoModel = require('../../database/models/samplemodels.js')

module.exports = {
	getTodos: function(req, res){
		// go into database
		// send todos back to the client 
		ToDoModel.findAll({})
		.then( (todos) => {
			res.status(200).send(todos)
		});
	},

	postTodo: function(req, res){
		ToDoModel.create({
			todo: req.body.todo
		})
	}
}