const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: String,
 totalDuration: Number,
 numExercises: Number,
 totalDuration: Number,
 totalSets: Number,
 totalReps: Number,
 totalDistance: Number
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
