const mongoose = require("mongoose");
const usuario = require("./usuario");
//Garante o schema criado

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://localhost/test");
    //Conecta com o servidor local e cria um banco de dados 'test'
    //await usuario.create({nome: 'Usuario1', hash: 'hashuser1'});

    const userExiste = await usuario.exists({nome:'Usuario1'});
    //Encontra o numero de usuarios com um determinado nome

    console.log(userExiste);
    if (userExiste != null) {
        console.log('O usuario existe');
    }
}