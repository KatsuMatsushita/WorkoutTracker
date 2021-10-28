const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: { type: String},
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
/* https://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index
answer by Pierre Maoui for avoiding behavior of type being a key word in MongoDB 
Implemented as 
type: {
        type: { type: String }
      },
This is in contradiction to Mongoose 6.0 */