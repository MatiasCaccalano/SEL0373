const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    id_animal: {
        type: String,
        required: true
    },
    //Cria a id da tag do animal
    peso: {
        type: Number
    },
    //Cria o peso do animal
},{
    timestamps: true
    //Cria uma vairavel que guarda quando o documento
    //foi criado e outra para a ultima vez que ela foi atualizada
});

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true //Obriga que esse campo seja preenchido ao criar um documento
    },
    hash: {
        type: String,
        required: true
    },
    grupo: {
        type: Number
    }
    //Grupo 1 ou grupo 2
},{
    timestamps: true
});

const medicaoSchema = new mongoose.Schema({
    velocidade: {
        type: Number,
        required: true
    },
    umidade: {
        type: Number,
        required: true
    },
    temperatura: {
        type: Number,
        required: true
    },
    sensor: {
        type: Number,
        ref: 'sensor'
    }
    //conecta a medicao a um sensor pelo populate
    
},{
    timestamps: true
});

const sensorSchema = new mongoose.Schema({
    sensor_id:{
        type: String,
        required: true
    },
    posicao:{
        type: [Number],
        required: true
    }
    //array com a latitude e longitude, respectivamente
},{
    timestamps: true
});

const animal = mongoose.model("animal", animalSchema);
const usuario = mongoose.model("usuario", usuarioSchema);
const medicao = mongoose.model("medicao", medicaoSchema);
const sensor = mongoose.model("sensor", sensorSchema);

module.exports = {
    animal, usuario, medicao, sensor
};