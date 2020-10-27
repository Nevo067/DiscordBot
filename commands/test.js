const messages = require("../events/messages");
const Discord = require("discord.js");
//const membreDao = require("../dataBases/membreDAO");


const { MembreDao } = require("../dataBases/membreDAO");

exports.run = (bot,message,args) =>{
    let promesse;
    console.log("test getMembre")
    let Dao = new MembreDao();
    promesse = Dao.getMembre();
    promesse.then(test => {
        console.log(test + "cela marche");
        //console.log(JSON.parse(test));
        let objetSend = test;
        console.log(objetSend[0].id);
        message.channel.send("voici le login du premier objet membre " + objetSend[0].login); 
    });
}