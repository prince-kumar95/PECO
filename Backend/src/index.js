const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
var nodemailer = require("nodemailer");
const emailValidator = require("deep-email-validator");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-header", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});

const port = process.env.PORT || 9999;

//Connection to DB
const db = mongoose.createConnection(
  "mongodb+srv://prince:<password>@peco.hy9kv.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

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

async function isEmailValid(email) {
  return emailValidator.validate(email);
}

app.post("/contact-us", async (req, res) => {
  const {
    name,
    email,
    phNo,
    date,
    natureOfEvent,
    message,
    isVerified,
  } = req.body;
  console.log(req.body);
  if (email !== "" && phNo !== "" && natureOfEvent !== "") {
    if (phNo.length === 10) {
      if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
        const { valid, reason, validators } = await isEmailValid(email);
        if (valid) {
          if (isVerified) {
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
              host: "smtp.live.com", // hostname
              secureConnection: false, // use SSL
              port: 587, // port for secure SMTP
              auth: {
                user: "email id",
                pass: "email password",
              },
              tls: {
                ciphers: "SSLv3",
              },
            });

            var mailOptions = {
              from: "pecoOfficial@outlook.com",
              to: `${email}`,
              subject: '"Application Received!!"',
              html: `<p>Greetings from PECO</p><p>We have received your application regarding <strong>${natureOfEvent}</strong>. We will be processing your application and our event organising team will shortly get in touch with you on ${phNo}<p/><br><p>Here is your application details</p><p><strong>Name :</strong> ${name}</p><p><strong>E-mail :</strong> ${email}</p><p><strong>Phone Number :</strong> ${phNo}</p><p><strong>Date Of Event :</strong> ${date}</p><p><strong>Nature Of Event :</strong>${natureOfEvent}</p><p><strong>Message :</strong>${message}</p>`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log("Error! ", error);
                res.status(400).send({ err: "An error occured in SendMail" });
              } else {
                res.status(201).send({
                  success:
                    "Your Enquiry has been submitted!. You will receieve a confirmation email soon. Don't forget to check your SPAM folder.",
                });
              }
            });
          } else {
            res.status(400).send({ err: "Please Verify yourself!" });
          }
        } else {
          res.status(400).send({
            err: "Please provide a valid email address.",
            reason: validators[reason].reason,
          });
        }
      } else {
        res
          .status(400)
          .send({ err: "Please enter a email address in correct format!" });
      }
    } else {
      res.status(400).send({ err: "Please Enter a 10 digit Phone Number!" });
    }
  } else {
    res.status(400).send({ err: "Please fill in the required fields!" });
  }
});

app.get("/", async (req, res) => {
  res.send("Server Works!");
});

app.listen(port);
