// connect to database
const ToDoModel = require('../../database/models/samplemodels.js')
console.log('controller yo')
module.exports = {
	getTodos: function(req, res){
		// go into database
		// send todos back to the client 
		console.log("here in get todos", ToDoModel)
		ToDoModel.findAll()
		.then( (todos) => {
			res.status(200).send(todos)
		})
		.catch( () => {
			console.log('here')
      		res.status(404)
    	})
	},

	postTodo: function(req, res){
		console.log("here in post")
		ToDoModel.create({
			todo: "just a test",
		}).then( (todo) => {
	      res.status(201).send(JSON.stringify(todo))
	    })
	    .catch( () => {
	      res.status(404)
	    })
	}
}