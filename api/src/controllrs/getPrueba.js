const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const a =[5,1,-4,9,22]
    let cercano=0
    try{
        for(let i =0;i<a.length;i++){
            if (cercano === 0) {
                cercano = a[i];

            } else if (a[i] > 0 && a[i] <= Math.abs(cercano)) {
                cercano = a[i];
            } else if (a[i] < 0 && - a[i] < Math.abs(cercano)) {
                cercano = a[i];
            }
        }
        console.log(cercano)   
        return res.send('salio')
    }catch(err){
    return res.send("Error general")
    }
})
module.exports = app;