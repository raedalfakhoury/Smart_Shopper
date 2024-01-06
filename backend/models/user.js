const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: { type: Number },
  country: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  addres: { type: String },
  phoneNumber: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});
userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcryptjs.hash(this.password, 10);
});
module.exports = mongoose.model("user", userSchema);