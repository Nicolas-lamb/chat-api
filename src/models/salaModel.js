const db = require("./db.js");


async function listarSalas(){
    return await db.findAll('salas')
}
async function mandarNick(){
    return await db.findAll('entrar')
}
module.exports = {listarSalas};