const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
 
}, {toJSON: {virtuals: true}});
WorkoutSchema.virtual("totalDuration").get(function(){
  var total = 0 
  this.exercises.forEach(ex => {
    total += ex.duration
    
  });
  return total
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
