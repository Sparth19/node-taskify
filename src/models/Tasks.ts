var mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: {
    type: String,
    enum: ["Todo", "Call", "Message", "Mail"],
    default: "Todo",
  },
  status: {
    type: String,
    enum: ["NEW", "IN-PROGRESS", "COMPLETED"],
    default: "New",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  expectedClosingDate: { type: Date },
  assignTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tasks", taskSchema);
