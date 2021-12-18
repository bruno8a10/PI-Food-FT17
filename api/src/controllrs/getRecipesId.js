//api 1
// const ApiId = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
//api2
//const ApiId = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=f1d23a6a7d6d47f5b8051460a7d59de5`)
//api3
//const ApiId  = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=ebb1fa670e434f739998405473d88874`)
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

                         const x = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=c0c32955a95548e7b616b6550fc3245d&number=20`)
                         const d = x.data.results
                         console.log("______:"+ id)
                         for(let i = 0; i< d.length;i++){
                            console.log("entro al for : "+d[i].id)

                                if(d[i].id==id){
                                    console.log("ingreso al if")
                                    const recipeApi = {
                                    id: d[i].id,
                                    name:d[i].title, 
                                    image: d[i].image,
                                    summary:d[i].summary,
                                    spoonacularScore:d[i].spoonacularScore,
                                    healthScore: d[i].healthScore, 
                                    analyzedInstructions: d[i].analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),
                                    types: d[i].diets.map((c)=>c)
                                    }
                                 return res.send(recipeApi)
                               }
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