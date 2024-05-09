var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  languagePreference: { type: String, default: "en" },
  displayMode: { type: String, enum: ["light", "dark"], default: "light" },
  //notificationPermission:{type:Boolean,default:true}
});

module.exports = mongoose.model("Users", userSchema);
