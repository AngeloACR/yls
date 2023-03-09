const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post('/', mainController.add);
mainRouter.put('/', mainController.actualizar);
mainRouter.get('/id/:id', mainController.getById);
mainRouter.get('/nombre/:nombre', mainController.getByNombre);
mainRouter.get('/', mainController.getResultados);

module.exports = mainRouter;
