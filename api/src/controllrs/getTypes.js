const URLAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d5ab2446c8e1439c90c73257b2f4e0b7";
const {Router}= require("express");
const {Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        let api =  await axios.get(URLAPI)
        const apiR = api.data.results;
        try{ 
        //     for(let i = 0; i< apiR.length;i++){
        //    const d = await axios.get(`https://api.spoonacular.com/recipes/${apiR[i].id}/information?apiKey=d5ab2446c8e1439c90c73257b2f4e0b7`)
        //      for(let j = 0;j< d.data.diets.length; j++){
        //          console.log(d.data.diets)
        //         await Type.findOrCreate({
        //             where:{
        //               name: d.data.diets[j],
        //             }
        //          })
        //       }
        //   }
        let t = await Type.findAll()
        console.log(t)
        return res.status(200).json(t)
        }catch(error){
            return res.send("Error Api")
        }
    }catch(err){
    return res.send("Error General")
}
})
module.exports = app;