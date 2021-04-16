const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH });

app.post("/mail", async (req, res) => {
  console.log(req.body.mail);
  send(req.body.mail);
  return res.status(200).json({ status: "Success" });
});

async function send(userMail) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ar1pperk@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH,
        accessToken: accessToken,
      },
    });
    let mailOptions = {
      from: "ar1pperk@gmail.com",
      to: userMail,
      subject: "Testing email",
      text: "IT works",
      attachments: [
        {
          filename: "sample.pdf",
          path: path.join(__dirname, "sample.pdf"),
          contentType: "application/pdf",
        },
      ],
    };
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("success");
      }
    });
  } catch (err) {
    console.log(err.message);
  }
}

function start() {
  app.listen(8989, () => {
    console.log("Listening on port 8989");
  });
}

module.exports = start;
