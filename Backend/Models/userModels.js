const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      minLength: [8, "Enter correct phone number"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Minimum length required is 8 characters"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("accounts", userSchema);
module.exports = userModel;
