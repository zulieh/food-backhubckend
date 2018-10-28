const sgMail = require('@sendgrid/mail');
require('dotenv').config();

/**
  * @description - This function use to send mail
  * @param {object} options - This contains where the mail will be sent to (user mail),
  * subject of the mail, the html and text version of the mail content
  * @returns {void} - This function doesn't return any value
  */
const sendMail = (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const mailMessage = {
    from: options.email,
    to: process.env.EMAIL,
    subject: options.subject,
    html: options.htmlMessage
  };
  sgMail.send(mailMessage);
};

module.exports = sendMail;
