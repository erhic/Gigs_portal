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
    applicationDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model("applications", applicationSchema);
module.exports = applicationModel;
