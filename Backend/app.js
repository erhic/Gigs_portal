const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./Models/userModels");
const jobsModel = require("./Models/jobsModels");
const applicationsModel = require("./Models/applicationsModel");
const verifyToken = require("./verifyToken");
const cors = require("cors");
require("dotenv").config;
// db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connect Successfully");
  })
  .catch(() => {
    console.log("Failed to connect");
  });
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  let user = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(user.password, salt, async (err, hpass) => {
        if (!err) {
          user.password = hpass;
          try {
            let usr = await userModel.create(user);
            res.send({ message: "User registered sucessfully" });
          } catch {
            (err) => {
              console.log(err);
              res.send({ message: "Failed to register user" });
            };
          }
        }
      });
    }
  });
});

app.post("/login", async (req, res) => {
  const userCreditials = req.body;
  try {
    const usr = await userModel.findOne({ email: userCreditials.email });
    if (usr !== null) {
      bcrypt.compare(userCreditials.password, usr.password, (err, result) => {
        if (result == true) {
          jwt.sign(
            { email: userCreditials.email },
            process.env.SECRETKEYWORD,
            (err, token) => {
              if (!err) {
                res.send({
                  message: "Login successful",
                  token: token,
                  userid: usr._id,
                  username: usr.username,
                });
              }
            }
          );
        } else {
          res.status(403).send({ message: "Wrong password" });
        }
      });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "server error" });
  }
});

//endpoint to post job
app.post("/createjobs", verifyToken, async (req, res) => {
  let jobData = req.body;
  try {
    let jobs = await jobsModel.create(jobData);
    console.log(jobs);
    res.status(201).send({ message: "job posted successfully" });
  } catch (err) {
    console.log(err);
    res.send(500).send({ message: "failed to post job" });
  }
});

//endpoint to get all jobs
app.get("/alljobs", async (req, res) => {
  try {
    let alljobs = await jobsModel.find();
    res.status(200).send(alljobs);
  } catch (err) {
    res.status(500).send({ message: "failed to get jobs" });
    console.log(err);
  }
});

//endpoint to apply for jobs
app.post("/applyjob", async (req, res) => {
  let applyData = req.body;
  try {
    let application = await applicationsModel.create(applyData);
    res.status(201).send({ message: "job applied successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "job application failed" });
  }
});

app.get("/jobs/:jobid/:userid/", (req, res) => {
  applicationsModel
    .find({ jobId: req.params.jobid, userId: req.params.userid })
    .then((job) => {
      res.send(job);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "failed to  find job" });
    });
});

//endpoint to see applied jobs by recruiter
app.get("/appliedjobs", async (req, res) => {
  try {
    let appliedJobs = await applicationsModel
      .find()
      .populate("userId")
      .populate("jobId");
    res.send(appliedJobs);
  } catch (err) {
    console.log(err);
    res.send({ message: "failed to find jobs" });
  }
});

//endpoint to give response to applicant by recruiter/ whether will proceed to next stage
app.put("/appliedjobs/:id", (req, res) => {
  let applicantStatus = req.body;
  applicationsModel
    .updateOne({ _id: req.params.id }, applicantStatus)
    .then((data) => {
      console.log("updated status");
      res.status(201).send({ message: "Status updated successfully" });
    })
    .catch((err) => {
      res.status(500).send({ message: "Failed to update status" });
    });
});

app.listen(process.env.PORT, () => {
  console.log("Serve running");
});
