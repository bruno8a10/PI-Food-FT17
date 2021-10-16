const URLAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=c0c32955a95548e7b616b6550fc3245d";
const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    const apiRecipe =[]
    try{
    //     const api =  await axios.get(URLAPI)
    //    const apiR = api.data.results
           try{
                for(let i = 1; i< 10;i++){
                    const d = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
                    console.log(d)
                //     apiRecipe.push({ id:d.data.id, name:d.data.title, image:d.data.image,
                //  summary:d.data.summary,spoonacularScore:d.data.spoonacularScore,
                //  healthScore: d.data.healthScore, analyzedInstructions: d.data.analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),types: d.data.diets.map((c)=>c)
                //  })   
                }
                let bsRecipe=  await Recipe.findAll({
                    attributes: {
                        exclude:['createdAt','updatedAt']},
                    include: {
                    model:Type,
                    attributes:['name'],
                    through:{
                        attributes:[]
                    }
                    }
                    
                });
                return res.json(bsRecipe.concat(apiRecipe))
            }catch(error){
                return res.send("Error Api")
            }
    }catch(err){
    return res.send("Error general")
    }
})
module.exports = app;