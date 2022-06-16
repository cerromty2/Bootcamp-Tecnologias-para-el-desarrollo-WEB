var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var directorioSchema = new Schema({
  title: { type: String },
  name: { type: String },
  age: { type: Number },
  adress: { type: String },
  phonenumber: { type: Number },
  email: { type: String },
  summary: { type: String },
});

module.exports = mongoose.model("Directorio", directorioSchema);