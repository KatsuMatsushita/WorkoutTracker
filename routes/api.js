const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.put("/api/workouts/:id", ( req, res) => {
    Workout.updateOne(
        {_id: req.params.id}, 
        {$push: {
            exercises: req.body}
        }
    )
    .then(dbUpdate => {
    res.json(dbUpdate);
    })
    .catch(err => {
        res.status(400).json(`There was an error when trying to PUT to the database: ${err}`);
    });
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

// GET the workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET the last workouts in range of 7
router.get("/api/workouts/range", (req, res) => {
    Workout.find( {} )
    .sort({ day: 1 })
    .then(dbWorkout => {
        rngWorkout = dbWorkout.slice(0,7);
        res.json(rngWorkout);
    })
    .catch(err => {
        res.status(400).json("There was an error while getting workouts in range" + err);
    });
});

router.get("/stats", (req, res) => {
    res.redirect("/stats.html");
})

router.get("/exercise", (req, res) => {
    res.redirect("/exercise.html");
})

module.exports = router;