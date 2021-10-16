const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async (req,res) =>{
    let {id} = req.params
    try{
        try{
            let recipeId = await Recipe.findByPk(id,
                {
                include:[Type] 
            })
            if(recipeId){
                return res.json(recipeId)
               }


          const ApiId = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
         if(ApiId){
            const recipeApi = {
                id: ApiId.data.id,name:ApiId.data.title, 
               image: ApiId.data.image,
               summary:ApiId.data.summary,
               spoonacularScore:ApiId.data.spoonacularScore,
               healthScore: ApiId.data.healthScore, 
                analyzedInstructions: ApiId.data.analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),
                types: ApiId.data.diets.map((c)=>c)
                 }
               return res.send(recipeApi)
           }
        }catch(error){
            return res.send("Error Api")
        }
     return res.status(200).send("No existe ese id")
    }catch(err){
    return res.send("Error general")
}
})
module.exports = app;