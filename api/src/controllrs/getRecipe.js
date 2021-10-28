const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const apiRecipe =[]
    try{
           try{
                // const x = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=ebb1fa670e434f739998405473d88874=10`)
                // const d = x.data.results
                // for(let i = 0; i< d.length;i++){
                //     apiRecipe.push({ 
                //     id:d[i].id, name:d[i].title, image:d[i].image,
                //  summary:d[i].summary,spoonacularScore:d[i].spoonacularScore,
                //  healthScore: d[i].healthScore, analyzedInstructions: d[i].analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),types: d[i].diets.map((c)=>c)
                //  })   
                // }
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