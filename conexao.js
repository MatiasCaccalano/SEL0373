const mongoose = require("mongoose");
const estudante = require("./estudante");
//Garante o schema criado

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://localhost/test");
    //Conecta com o servidor local e cria um banco de dados 'test'
    await mongoose.connection.dropDatabase();
    //Deleta o banco de dados
    await estudante.create({nome: 'Maria', idade:27,nota:8.5},
                        {nome: 'Joao', idade:20,nota:7.5},
                        {nome: 'Pedro', idade:21,nota:9},
                        {nome: 'Carlos', idade:32,nota: 5}  
    );
    //Cria 4 documentos com o schema estudante e adiciona no banco de dados
    const novoEstudante = new estudante({nome:'Joana',idade:25,nota:4});
    //Cria um novo estudante que ainda nao e adicionado a database
    novoEstudante.save();
    //Salva o estudante no banco de dados

    const estudante1 = await estudante.findOne({idade:{$gt:30}});
    //Encontra o primeiro estudante com idade maior que 30
    const variosEstudantes = await estudante.where("idade").lt(26).limit(2).select("nome");
    //Encontra 2 estudantes com idade menor que 26 e guarda seus nomes
    console.log(estudante1);
    //Imprime no terminal o estudante com idade maior que 30
    console.log(variosEstudantes);
    //Imprime o nome dos 2 primeiros estudantes com menos de 26 anos
}