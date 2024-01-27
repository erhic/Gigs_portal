const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./Models/userModels");
const jobsModel = require("./Models/jobsModels");
const applicationsModel = require("./Models/applicationsModel");
const verifyToken = require("./verifyToken");
const cors = require("cors");

// db connection
mongoose
  .connect("mongodb://localhost:27017/jobsportal")
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
          jwt.sign({ email: userCreditials.email }, "myapp", (err, token) => {
            if (!err) {
              res.send({ message: "Login successful", token: token });
            }
          });
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
app.post("/createjobs", async (req, res) => {
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

app.get("/alljobs", async (req, res) => {
  try {
    let alljobs = await jobsModel.find();
    res.status(200).send(alljobs);
  } catch (err) {
    res.status(500).send({ message: "failed to get jobs" });
    console.log(err);
  }
});

app.post("/applyjob", async (req, res) => {
  let applyData = req.body;
  try {
    let application = await applicationsModel.create(applyData);
    res.status(201).send({ message: "job applied successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("job application failed");
  }
});

// app.get("/foods", verifyToken, async (req, res) => {
//   try {
//     let foods = await foodModel.find();
//     res.send(foods);
//   } catch (err) {
//     console.log(err);
//     res.send({ message: "Problem fetching data" });
//   }
// });

// app.get("/foods/:name", verifyToken, async (req, res) => {
//   try {
//     let foods = await foodModel.find({
//       name: { $regex: req.params.name, $options: "i" },
//     });
//     if (foods.length !== 0) {
//       res.send(foods);
//     } else {
//       res.status(404).send({ message: "food item not found" });
//     }
//   } catch (err) {
//     res.send({ messsage: "Failed to find item" });
//   }
// });
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
app.get("/appliedjobs", async (req, res) => {
  try {
    let appliedJobs = await applicationsModel.find();
    res.send(appliedJobs);
  } catch (err) {
    console.log(err);
    res.send({ message: "failed to find jobs" });
  }
});

// app.post("/tracking", verifyToken, async (req, res) => {
//   let trackData = req.body;
//   try {
//     let data = await trackingModel.create(trackData);
//     console.log(data);
//     res.status(201).send({ message: "Data added successfuly" });
//   } catch (err) {
//     res.status(500).send({ message: "failed to add data" });
//   }
// });

// app.get("/track/:userid/:datess", verifyToken, async (req, res) => {
//   let userid = req.params.userid;
//   let dates = new Date(req.params.datess);
//   let strDate =
//     dates.getDate() + "/" + (dates.getMonth() + 1) + "/" + dates.getFullYear();
//   console.log(strDate, dates);
//   try {
//     let usedfoods = await trackingModel
//       .find({ userId: userid, eatDate: strDate })
//       .populate("userId")
//       .populate("foodId");
//     res.status(200).send(usedfoods);
//   } catch (err) {
//     res.status(500).send({ message: "failed to fetch food" });
//   }
// });

app.listen(3500, () => {
  console.log("Serve running");
});
