const express = require('express');
const router = express.Router();

const {getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/task')

// router.get('/api/v1/tasks', getTask)
// router.post('/api/v1/tasks', createTask)
// router.get('/api/v1/tasks/:id', getSingleTask)
// router.patch('/api/v1/tasks/:id', updatePerson)
// router.delete('/api/v1/tasks/:id', deleteTask)

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router 