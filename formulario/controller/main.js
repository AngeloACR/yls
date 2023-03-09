const Formularios = require("../models/main");

const ventasController = {
  add: async (req, res) => {
    try {
      let formulario = req.body.formulario;
      let resultado = await Formularios.add(formulario);

      res.status(200).json(resultado);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  actualizar: async (req, res) => {
    try {
      let id = req.body.id;
      let formulario = req.body.formulario;
      let resultado = await Formularios.actualizar(id, formulario);

      res.status(200).json(resultado);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getByNombre: async (req, res) => {
    try {
      let nombre = req.params.nombre;
      let resultado = await Formularios.getByNombre(nombre);

      res.status(200).json(resultado);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getById: async (req, res) => {
    try {
      let id = req.params.id;
      let resultado = await Formularios.getById(id);

      res.status(200).json(resultado);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getResultados: async (req, res) => {
    try {
      let resultado = await Formularios.getResultados();

      res.status(200).json(resultado);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = ventasController;
