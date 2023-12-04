
const createMailTemplate = (name, email, message,QR) => {
  return `
    <html>
      <head>
        <title>Email Template</title>
      </head>
      <body>
        <h1>Contact Form</h1>

          <label for="name">Name:${name}"</label>

          
          <label for="email">Email:${email}</label>
          
          <label for="message">Message:${message}</label>

          <img src="cid:${QR}" alt="QR" width="200" height="200">


      </body>
    </html>
  `;
};

module.exports = createMailTemplate;
