var express = require("express"); //pega o pacote express
var app = express(); //cria o objeto
app.use(express.urlencoded({extended : true}));
app.use(express.json);

const router = express.Router();//caminho da url;
app.use('/', router.get('/', (req,res)=>{// o / é o inicio da rota
    res.status(200).send("<h1>API-CHAT</h1>")
}))

app.use('/', router.get('/sobre', (req,res)=>{
    res.status(200).send({
        "nome": "API-CHAT",
        "versão": "1.0.0",
        "autor": "Cândido"
    })
}))

app.use('/', router.get('/salas', (req,res)=>{
    const salaController = require("./controllers/salaController");
    let resp = salaController.get();
    res.status(200).send(resp);
}))


module.exports = app; //exporta modulo para usar em outro lugar
