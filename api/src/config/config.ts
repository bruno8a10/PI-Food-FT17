import nodemailer = require ('nodemailer')

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "bruno8a108a@gmail.com", // generated ethereal user
      pass: "urwcuudtewvwecwo", // generated ethereal password
    },
  });

//   transporter.verify().then(() =>{
//       console.log("xdxdxd");
//   });