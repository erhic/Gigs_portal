const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accounts",
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phoneno: {
      type: Number,
      required: true,
      maxLength: [15, "Minimum length required is 15 characters"],
    },
    cvlink: {
      type: String,
      required: false,
    },
    applicationDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model("accounts", applicationSchema);
module.exports = applicationModel;
