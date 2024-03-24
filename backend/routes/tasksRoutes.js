const express = require("express");
const { getAllTasks, addNewTask } = require("../controllers/tasksControllers")

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", addNewTask)

router.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

module.exports = router