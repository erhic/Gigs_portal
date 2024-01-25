const mongoose = require("mongoose");
const jobSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    companyLogo: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    minimumSalary: {
      type: String,
    },
    maximumSalary: {
      type: String,
    },
    salaryType: {
      type: String,
    },
    jobLocation: {
      type: String,
    },
    experienceType: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    postDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("jobs", jobSchema);
module.exports = jobModel;
