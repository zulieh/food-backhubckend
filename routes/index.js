const express = require('express');
const sendMail = require('../email/email');
const emailMessage = require('../email/eMessage');

const router = express.Router();


/* Contact */
router.post('/api/v1/contact', (req, res) => {
  let { firstname, lastname, email, phone, eventType, message } = req.body;
  sendMail({
    email: email,
    subject: 'More Information',
    htmlMessage: emailMessage(firstname, lastname, email, phone, eventType, message)
  });
  res.json('Message Sent');
});

module.exports = router;