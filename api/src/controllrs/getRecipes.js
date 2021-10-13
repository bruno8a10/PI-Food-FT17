const URLAPI = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d5ab2446c8e1439c90c73257b2f4e0b7";
const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    const apiRecipe =[]
    try{
        const api =  await axios.get(URLAPI)
       const apiR = api.data.results
           try{
                for(let i = 0; i< apiR.length;i++){
                    const d = await axios.get(`https://api.spoonacular.com/recipes/${apiR[i].id}/information?apiKey=d5ab2446c8e1439c90c73257b2f4e0b7`)
                    apiRecipe.push({ id:apiR[i].id, name:apiR[i].title, image: apiR[i].image,
                 summary:d.data.summary,spoonacularScore:d.data.spoonacularScore,
                 healthScore: d.data.healthScore, analyzedInstructions: d.data.analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),types: d.data.diets.map((c)=>c)

               


                 })   
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