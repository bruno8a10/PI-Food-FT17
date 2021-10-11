const { Router } = require('express');
const Types = require('../controllrs/getTypes')
const Recipes = require('../controllrs/getRecipes')
const RecipesId = require('../controllrs/getRecipesId')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', Types)
router.use('/recipes', Recipes)
router.use('/recipesId', RecipesId)

module.exports = router;
