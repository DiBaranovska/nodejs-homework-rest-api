import sgMail from "@sendgrid/mail";
import "dotenv/config";
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);
const email = {
  to: "gopesoy137@vreaa.com",
  from: "dmitrudi@ukr.net",
  subject: "Test email",
  html: "<p>Test email localhost: 3000<p>",
};

sgMail
  .send(email)
  .then(() => console.log("email sucess"))
  .catch((error) => console.log(error.message));
