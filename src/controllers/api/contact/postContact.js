require("dotenv").config();
const Contacts = require("../../../models/contact/contact");
const smtp = require("nodemailer");

const sendMail = (user) => {
  const transporter = smtp.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: "465",
    ssl: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const transporterOptions = {
    to: `${process.env.SEND_TO}`,
    subject: `${user?.subject}`,
    text: `${user.message}`,
    html: `<h2>Name : ${user?.name || "Unkown"}</h2>
    <h3>Email Address : ${user?.email}</h3>
    <h4>Message : ${user?.message}</h4>
    `,
  };

  transporter.sendMail(transporterOptions, (err, info) => {
    if (err) {
      return;
    } else {
      return;
    }
  });
};

const postContact = async (req, res, next) => {
  try {
    const contactData = req.body;
    const posted = await Contacts.create(contactData);
    res.send(posted);
    sendMail(contactData);
  } catch (error) {
    next(error);
  }
};

module.exports = postContact;
