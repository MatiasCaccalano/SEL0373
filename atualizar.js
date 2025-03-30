const mongoose = require("mongoose");
const estudante = require("./estudante");

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://localhost/test");
    const removido = await estudante.deleteOne({nome:'Joao'});
    //Remove o primeiro documento com nome 'Joao'
    console.log(removido);
    const reprovados = await estudante.updateMany({nota: {$lt:5}},{aprovado: false});
    //Atualiza o campo aprovado para false para todos os documentos com nota menor que 5
    const aprovados = await estudante.updateMany({nota: {$gte:5}},{aprovado: true});
    //Atualiza o campo aprovado para true para todos os documentos com nota maior ou igual a 5
    console.log(reprovados);
    console.log(aprovados);
    const todos = await estudante.find();
    //Encontra todos os documentos da colecao
    console.log(todos);
}