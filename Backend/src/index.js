const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
var nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());
const port = 9999;

// const accountSid = "ACe1456a8ad68ba997d39a9e46e8e1d2fa";
// const authToken = "b109ce403e1bc2c1211823e6c0df60c7";
// const client = require("twilio")(accountSid, authToken);

//Connection to DB
const db = mongoose.createConnection("mongodb://localhost:27017/PECO", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phNo: String,
  date: Date,
  natureOfEvent: String,
  message: String,
});

//user Model
const enquiryModel = db.model("enquiry", enquirySchema);

app.post("/contact-us", async (req, res) => {
  const { name, email, phNo, date, natureOfEvent, message } = req.body;
  const newEnquiry = new enquiryModel({
    name,
    email,
    phNo,
    date,
    natureOfEvent,
    message,
  });
  await newEnquiry.save();

  //to send an email
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pk9741622@gmail.com",
      pass: "qwerty@123",
    },
  });

  var mailOptions = {
    from: "pk9741622@gmail.com",
    to: `${email}`,
    subject: '"Application Received!!"',
    html: `<p>Greetings from PECO</p><p>We have received your application regarding <strong>${natureOfEvent}</strong>. We will be processing your application and our event organising team will shortly get in touch with you on ${phNo}<p/><br><p>Here is your application details</p><p><strong>Name :</strong> ${name}</p><p><strong>E-mail :</strong> ${email}</p><p><strong>Phone Number :</strong> ${phNo}</p><p><strong>Date Of Event :</strong> ${date}</p><p><strong>Nature Of Event :</strong>${natureOfEvent}</p><p><strong>Message :</strong>${message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error ", error);
    } else {
      res.status(201).send({
        success:
          "Your Enquiry has been submitted! A confirmation email with your enguiry details have been sent to your registered email Id",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
