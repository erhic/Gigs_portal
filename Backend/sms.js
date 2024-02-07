// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Thank you for make an job application, we are pleased by your profile. Check your email for an interview invitation date within the next 24hrs.   ",
    from: "+14133495537",
    to: "",
  })
  .then((message) => console.log("message sent successfuly"));
