const express = require("express");
const {
    getAllTasks,
    createTask,
    deleteTask,
    completeTask,
} = require("../controllers/tasksControllers");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:taskId", completeTask);

router.delete("/:taskId", deleteTask);

router.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

module.exports = router;
