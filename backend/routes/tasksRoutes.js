const express = require("express");
const { getAllTasks, addNewTask, deleteTask } = require("../controllers/tasksControllers");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", addNewTask);

router.delete("/:taskId", deleteTask);

router.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

module.exports = router;