const mongoose = require("mongoose");

const estudanteSchema = new mongoose.Schema({
    nome: String,
    idade: {
        type:Number,
        min: [1, "A idade deve ser positiva!"], //Caso uma idade menor que
        //1 seja colocada imprime a mensaem de erro
        required: true, //Obriga que esse campo seja preenchido ao criar um documento
    },
    nota: {
        type:Number,
        min: 0,
    },
    aprovado: Boolean,
    criadoEm: {
        type: Date,
        immutable:true, //O valor colocado nao pode ser alterado
        default: () => Date.now(), //Caso nada seja colocado 
        //preenche com a hora atual
    }
});
//Estrutura para criar um schema

module.exports = mongoose.model("estudante", estudanteSchema);
//Salva o schema