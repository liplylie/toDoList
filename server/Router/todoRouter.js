const router = require('express').Router();
const toDoController = require('../controller/controller.js');


console.log("here in router", router);


router.get('/todo', toDoController.getTodos);
router.post('/todo', toDoController.postTodo);

module.exports = router;

