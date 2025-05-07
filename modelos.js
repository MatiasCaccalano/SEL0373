const mongoose = require("mongoose");
const { Schema } = mongoose;

//Cria o Modelo do usuario
const usuarioSchema = new mongoose.Schema({
    //Cria o campo para armazenar o nome do usuario
    user: {
        type: String,
        //Obriga que esse campo seja preenchido ao criar um documento
        required: true
    },
    //Campo para guardar a hash do usuario
    hash: {
        type: String,
        required: true
    },
    //Define se o usuario pertence ao grupo 1 ou grupo 2
    grupo: {
        type: Number
    }
},{
    timestamps: true
});

//Modelo dos animais (Grupo 1)
const animalSchema = new mongoose.Schema({
    //Cria a id da tag do animal
    id_animal: {
        type: String,
        required: true
    },
    //Cria a variavel para armazenar o peso
    peso: {
        type: Number
    },
},{
    //Cria uma vairavel que guarda quando o documento
    //foi criado e outra para a ultima vez que ela foi atualizada
    timestamps: true
});

// Modelo dos sensores (Modulos) (Grupo 2)
const sensorSchema = new mongoose.Schema({
    //Guarda uma string para identificar o sensor
    //Diferente do _id do objeto que e usado pelo modelo medicao
    sensor_id:{
        type: String,
        required: true
    },
    //Dado da posicao de GPS do modulo (sensor)
    //Armazenado em um vetor latitude e longitude
    posicao:{
        type: [Number],
        required: true
    }
},{
    timestamps: true
});

//Modelo das medicoes dos sensores (Grupo 2)
const medicaoSchema = new mongoose.Schema({
    //Guarda a informacao da velocidade
    velocidade: {
        type: Number,
        required: true
    },
    //Guarda a informacao da umidade
    umidade: {
        type: Number,
        required: true
    },
    //Guarda a informacao da temperatura
    temperatura: {
        type: Number,
        required: true
    },
    //Guarda o ID do objeto que corresponde ao sensor (modulo)
    //que deu origem aos dados medidos
    sensor: {
        type: Schema.Types.ObjectId
    },
},{
    timestamps: true
});

//Define variaveis de exportacao para cada modelo criado
const usuario = mongoose.model("usuario", usuarioSchema);
const animal = mongoose.model("animal", animalSchema);
const sensor = mongoose.model("sensor", sensorSchema);
const medicao = mongoose.model("medicao", medicaoSchema);

//Exporta os modelos criados
module.exports = {
    usuario, animal, sensor, medicao
};
