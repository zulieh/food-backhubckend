
const emailMessage = (firstname, lastname, email, phone, eventType, message) => {
      return `
      <div>
        <h3>Hi, I am ${firstname} ${lastname}. I am interested in ${eventType}</h3>
        <p>${message}</p>
        <p>Here is my contact information ${phone} and ${email}</p>
      </div>`;
    }

module.exports = emailMessage;
  