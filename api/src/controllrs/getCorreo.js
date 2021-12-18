const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
const cron = require('node-cron');
const { get } = require("superagent");
const nodemailer = require ('nodemailer')
app.get("/", async (req,res) =>{
    //configuracion para mandar correo
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "bruno8a108a@gmail.com", // generated ethereal user
          pass: "urwcuudtewvwecwo", // generated ethereal password
        },
      });

    var x = [{fecha:'2021-11-27T00:30:05.404Z', correo:"Bruno8a108a@gmail.com"},
    {fecha:'2021-11-28T00:30:05.404Z', correo:"Bruno8a108a@gmail.com"},
    {fecha:'2021-11-27T00:30:05.404Z', correo:"Bruno8a108a@gmail.com"}]

    const fechaActual = new Date()
    try{
    cron.schedule('* * * *', ()=>{
        // console.log("fecha Actual : " + fechaActual.toLocaleDateString("en-US"))
        for(let i=0; i<x.length;i++){

            let fecha =(new Date(x[i].fecha))
            10
            9
            if(fechaActual.getMonth()===fecha.getMonth()){
                if(1==(fechaActual.getDate()-fecha.getDate())){
                     //remitente y contenido 
                    var mailOptions ={
                        from:"bruno",
                        to:`${x[i].correo}`,
                        subject:"enviandoo....",
                        text:`${x[i].fecha}....Su turno de servicio se realizara mañana${x[i].correo}`,
                         }
                    transporter.sendMail(mailOptions, (error,info) =>{
                        if(error){
                         res.status(500).send(error)
                        }else{
                        console.log("correo enviado"+new Date())
                         res.status(200).json(mailOptions)
                        }
                    })
                }
            } 
        }

    })
    }catch(err){
    return res.send("Error general")
    }
})
module.exports = app;