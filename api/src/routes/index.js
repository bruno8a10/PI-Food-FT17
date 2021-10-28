const { Router } = require('express');
const Types = require('../controllrs/getTypes')
const Recipes = require('../controllrs/getRecipes')
const Recipe = require('../controllrs/getRecipe')
const RecipesId = require('../controllrs/getRecipesId')
const Post = require('../controllrs/postRecipes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', Types)
router.use('/recipes', Recipes)
router.use('/recipe', Recipe)
router.use('/recipesId', RecipesId)
router.use('/post', Post)

module.exports = router;
