const messages = require("../events/messages");
const Discord = require("discord.js");
//const membreDao = require("../dataBases/membreDAO");


const { MembreDao } = require("../dataBases/membreDAO");

exports.run = (bot,message,args) =>{
    let promesse;
    console.log("test getMembre")
    let Dao = new MembreDao();
    promesse = Dao.postMembre(args[0],args[1]);
    promesse.then(test => {
        console.log("cela marche");
        message.channel.send(args[0] +" "+ args[1]);
        //let objetSend = JSON.parse(test);
        //message.channel.send("voici le login du premier objet membre " + objetSend[0][1]);
    });
}