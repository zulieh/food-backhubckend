
const emailMessage = (firstname, lastname, email, phone, message) => {
      return `
      <div>
        <h3>Hi, I am ${firstname} ${lastname}</h3>
        <p>${message}</p>
        <p>Here is my contact information ${phone} and ${email}</p>
      </div>`;
    }

module.exports = emailMessage;
  