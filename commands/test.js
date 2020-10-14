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
        let objetSend = JSON.parse(test);
        message.channel.send("voici le login du premier objet membre " + objetSend[0][1]);
    });
}