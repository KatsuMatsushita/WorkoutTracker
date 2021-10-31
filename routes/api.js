const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.put("/api/workouts", ({ body }, res) => {
    Workout.updateOne(body)
});

router.post("/api/workouts", ({ body }, res) => {
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

router.get("/stats", (req, res) => {
    res.redirect("/stats.html");
})

router.get("/exercise", (req, res) => {
    res.redirect("/exercise.html");
})

module.exports = router;