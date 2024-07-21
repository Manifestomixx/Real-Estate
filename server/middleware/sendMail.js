const {createTransport} = require('nodemailer');
const path = require('path');

const sendEmail = (options)=>{
    const transporter = createTransport({
        host:process.env.EMAIL_SERVICE,
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from:process.env.EMAIL_FROM,
        to:options.to,
        subject:options.subject,
        html: options.html,
        attachments: [
            {
              filename: 'BHlogo.png',
              path: path.join(__dirname,'../asset/BHlogo.png'), // Adjust the path to your logo file
              cid: 'logo@yourdomain.com' // same cid value as in the html img src
            }
          ]
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: " + info.response);
        }
    })

}



module.exports = sendEmail