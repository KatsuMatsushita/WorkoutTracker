const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/Workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET the last workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET the last workouts in range
router.get("/api/workouts/range", (req, res) => {

})

module.exports = router;