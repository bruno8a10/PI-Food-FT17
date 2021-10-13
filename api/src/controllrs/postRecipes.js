const { Router } = require('express');
const app = Router();
const {Op} = require ("sequelize");
const axios = require("axios");
const { Recipe} = require('../db.js');
app.post('/', async (req, res) => {
	const { name, image, summary, spoonacularScore, healthScore, analyzedInstructions,types } = req.body;
	
	if (types.length === 0) {
		return res.sendStatus(500);
	}
	try {
		let newRecipe = await Recipe.create({
			name,
			image,
			summary,
			spoonacularScore,
			healthScore,
            analyzedInstructions
		});	
		await newRecipe.addType(types);
		return res.json(newRecipe);
	} catch (error) {
		return res.status(404).json(error);
	}
});
module.exports = app;