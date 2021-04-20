const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

async function sendMail(name, email, message) {
  let nodemailerMailgun = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  let mailOptions = {
    to: "akshaykadam7991@gmail.com",
    from: email,
    text: `${name} says ${message}`,
    subject: `Contact Form | Personal Website`,
  };

  await nodemailerMailgun.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log("success");
    return true;
  });
}

app.post(
  "/mail",
  body("name").trim().isLength({ min: 1 }).withMessage("Name cannot be empty"),
  body("email").isEmail().withMessage("Please type a valid email address"),
  body("message")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Message cannot be empty"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { name, email, message } = req.body;
    if (sendMail(name, email, message)) {
      return res.status(200).json({ status: "Success" });
    } else {
      return res.status(500).json({ status: "Failure" });
    }
  }
);

function start() {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = start;
