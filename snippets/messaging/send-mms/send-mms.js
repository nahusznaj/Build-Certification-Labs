const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hello there!',
         from: '+15555555555',
         mediaUrl: 'https://demo.twilio.com/owl.png',
         to: '+12316851234'
       })
      .then(message => console.log(message.sid))
      .done();
