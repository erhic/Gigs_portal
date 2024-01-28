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
    password: {
      type: String,
      required: true,
      minLength: [8, "Minimum length required is 8 characters"],
    },
    cvLink: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("accounts", userSchema);
module.exports = userModel;
