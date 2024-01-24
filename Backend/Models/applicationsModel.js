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
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
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
    sociallink: {
      type: String,
      required: false,
    },
    eatDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model("accounts", applicationSchema);
module.exports = applicationModel;
