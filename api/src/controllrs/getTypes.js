const URLAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=c0c32955a95548e7b616b6550fc3245d";
const {Router}= require("express");
const {Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        // let api =  await axios.get(URLAPI)
        // const apiR = api.data.results;
        try{ 
          //   for(let i = 50; i< 92;i++){
          //    console.log(i)   
          //  const d = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
          //  console.log(d)
          // //  if(d.data.diets.length < 0){
          // //   for(let j = 0;j< d.data.diets.length; j++){
          // //       console.log(d.data.diets)
          // //      await Type.findOrCreate({
          // //          where:{
          // //            name: d.data.diets[j],
          // //          }
          // //       })
          // //    }
          // //  }
            
          // }
          //   for(let i = 0; i< apiR.length;i++){
          //  const d = await axios.get(`https://api.spoonacular.com/recipes/${apiR[i].id}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
          //    for(let j = 0;j< d.data.diets.length; j++){
          //        console.log(d.data.diets)
          //       await Type.findOrCreate({
          //           where:{
          //             name: d.data.diets[j],
          //           }
          //        })
          //     }
          // }
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