const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async (req,res) =>{
    let {id} = req.params
    console.log(id)
    try{
        try{
          const ApiId = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d5ab2446c8e1439c90c73257b2f4e0b7`)
           if(ApiId){
            const recipe = {id: ApiId.data.id,name:ApiId.data.title, image: ApiId.data.image,
                summary:ApiId.data.summary,spoonacularScore:ApiId.data.spoonacularScore,
                healthScore: ApiId.data.healthScore, analyzedInstructions: ApiId.data.analyzedInstructions.map((x)=>x.steps.map((c)=>c.step))
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