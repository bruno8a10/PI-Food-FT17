//api 1
// const d = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=c0c32955a95548e7b616b6550fc3245d`)
//api2
//const d = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=f1d23a6a7d6d47f5b8051460a7d59de5`)
//api3
//const d = await axios.get(`https://api.spoonacular.com/recipes/${i}/information?apiKey=ebb1fa670e434f739998405473d88874`)
const {Router}= require("express");
const { Recipe, Type} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    const name = req.query.name;
    const apiRecipe =[]
    const apiRecipeName =[]
    try{
           try{
                if(name){
                    const x = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=c0c32955a95548e7b616b6550fc3245d&number=20`)
                    const d = x.data.results
                    console.log("entro.........."+ name)
                    for(let i = 0; i< d.length;i++){
                        console.log("entro22..........")
                        console.log(d[i].title)
                           if(d[i].title.includes(name)){
                            console.log("entroo")
                            apiRecipeName.push({
                                id: d[i].id,
                               name:d[i].title, 
                               image: d[i].image,
                               summary:d[i].summary,
                               spoonacularScore:d[i].spoonacularScore,
                               healthScore: d[i].healthScore, 
                               analyzedInstructions: d[i].analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),
                               types: d[i].diets.map((c)=>c)
                               })    
                        }
                   }
                   if(apiRecipeName.length>0){
                    return res.status(200).json(apiRecipeName)
                   }
                    let BsRecipeName = await Recipe.findAll({
                        where:{
                            name:{
                                [Op.iLike]:`%${name}%`,
                            }
                        },
                        attributes: {
                            exclude:['createdAt','updatedAt']},
                        include: {
                        model:Type,
                        attributes:['name'],
                        through:{
                            attributes:[]
                        }
                        } 
                     },);
                     if(BsRecipeName){
                      return res.status(200).json(BsRecipeName)    
                      }
                }
                const x = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=c0c32955a95548e7b616b6550fc3245d&number=20`)
                const d = x.data.results
                for(let i = 0; i< d.length;i++){
                    apiRecipe.push({ 
                    id:d[i].id, name:d[i].title, image:d[i].image,
                 summary:d[i].summary,spoonacularScore:d[i].spoonacularScore,
                 healthScore: d[i].healthScore, analyzedInstructions: d[i].analyzedInstructions.map((x)=>x.steps.map((c)=>c.step)),types: d[i].diets.map((c)=>c)
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