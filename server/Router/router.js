const router = require('express').Router();
const toDoController = require('../controller/controller.js');

router.route('/todo')
	.get(toDoController.getTodos)
	.post(toDoController.postTodo)

module.export = router;

