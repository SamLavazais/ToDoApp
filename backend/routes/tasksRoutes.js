const express = require("express");
const { getTasks } = require("../controllers/tasksControllers")

const router = express.Router();

router.get("/", getTasks);

router.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

module.exports = router