const db = require("../database").db;

const FormularioSchema = new db.Schema(
  {
    nombre: {
      type: String,
    },
    cancion1: {
      type: Number,
    },
    cancion2: {
      type: Number,
    },
    cancion3: {
      type: Number,
    },
    cancion4: {
      type: Number,
    },
    cancion5: {
      type: Number,
    },
    cancion6: {
      type: Number,
    },
    cancion7: {
      type: Number,
    },
    cancion8: {
      type: Number,
    },
    cancion9: {
      type: Number,
    },
    cancion10: {
      type: Number,
    },
    cancion11: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

FormularioSchema.statics = {
  add: async function (element) {
    try {
      let item = await this.create(element);
      return item;
    } catch (error) {
      console.log(error.toString());
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  actualizar: async function (id, resultados) {
    try {
      let formulario = await this.getById(id);
      formulario.nombre = resultados.nombre;
      formulario.cancion1 = resultados.cancion1;
      formulario.cancion2 = resultados.cancion2;
      formulario.cancion3 = resultados.cancion3;
      formulario.cancion4 = resultados.cancion4;
      formulario.cancion5 = resultados.cancion5;
      formulario.cancion6 = resultados.cancion6;
      formulario.cancion7 = resultados.cancion7;
      formulario.cancion8 = resultados.cancion8;
      formulario.cancion9 = resultados.cancion9;
      formulario.cancion10 = resultados.cancion10;
      let result = await formulario.save();
      return result;
    } catch (e) {
      throw new Error(e.message);
    }
  },

  getById: async function (id) {
    try {
      let query = { _id: id };
      let formulario = await this.findOne(query);
      return formulario;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  getByName: async function (nombre) {
    try {
      let query = { nombre };
      let formulario = await this.findOne(query);
      return formulario;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  getResultados: async function (id) {
    try {
      let formularios = await this.find();
      let cancion1Length = formularios.filter((f) => !!cancion1).length;
      let cancion2Length = formularios.filter((f) => !!cancion2).length;
      let cancion3Length = formularios.filter((f) => !!cancion3).length;
      let cancion4Length = formularios.filter((f) => !!cancion4).length;
      let cancion5Length = formularios.filter((f) => !!cancion5).length;
      let cancion6Length = formularios.filter((f) => !!cancion6).length;
      let cancion7Length = formularios.filter((f) => !!cancion7).length;
      let cancion8Length = formularios.filter((f) => !!cancion8).length;
      let cancion9Length = formularios.filter((f) => !!cancion9).length;
      let cancion10Length = formularios.filter((f) => !!cancion10).length;
      let resultados = formularios.reduce(
        (resultados, formulario) => {
          resultados.cancion1 += formulario.cancion1 / cancion1Length;
          resultados.cancion2 += formulario.cancion2 / cancion2Length;
          resultados.cancion3 += formulario.cancion3 / cancion3Length;
          resultados.cancion4 += formulario.cancion4 / cancion4Length;
          resultados.cancion5 += formulario.cancion5 / cancion5Length;
          resultados.cancion6 += formulario.cancion6 / cancion6Length;
          resultados.cancion7 += formulario.cancion7 / cancion7Length;
          resultados.cancion8 += formulario.cancion8 / cancion8Length;
          resultados.cancion9 += formulario.cancion9 / cancion9Length;
          resultados.cancion10 += formulario.cancion10 / cancion10Length;
          return resultados;
        },
        {
          cancion1: 0,
          cancion2: 0,
          cancion3: 0,
          cancion4: 0,
          cancion5: 0,
          cancion6: 0,
          cancion7: 0,
          cancion8: 0,
          cancion9: 0,
          cancion10: 0,
        }
      );
      return resultados;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
};

module.exports = db.model("Formulario", FormularioSchema);
