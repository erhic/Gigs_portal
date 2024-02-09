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
    applicationStatus: {
      type: String,
      default: "pending",
    },
    cvlink: {
      type: String,
      default: " ",
    },
    sociallink: {
      type: String,
      default: " ",
    },
    phoneno: {
      type: Number,
      minLength: [8, "Enter correct phone number"],
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    applicationDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model("applications", applicationSchema);
module.exports = applicationModel;
