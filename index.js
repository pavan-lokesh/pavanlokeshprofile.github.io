const { getMaxListeners } = require('process');
function send(){
  


    var nodemailer = require('nodemailer');

    const form = document.getElementById("contact-form");
    const email = document.getElementById("Email").value; // making a function send to get all values in the form and display it in the console for testing

    const name = document.getElementById("Name").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("projdesc").value;
    form.submit();
    form.reset();
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gpavanlokeshnoreply@gmail.com',
            pass: 'pavan@123'
        }
    });
    var mailOptions = {
        from: name,
        to: 'pavanloakeshnaiduguruju@gmail.com',
        subject: subject,
        text: body
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}