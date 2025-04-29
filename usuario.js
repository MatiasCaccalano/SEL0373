const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true, //Obriga que esse campo seja preenchido ao criar um documento
    },
    hash: {
        type: String,
        required: true,
    }
});
//Estrutura para criar um schema

module.exports = mongoose.model("usuario", usuarioSchema);
//Salva o schema