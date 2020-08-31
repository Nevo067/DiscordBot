const messages = require("../events/messages");

const Discord = require("discord.js");
exports.run =(args,message)=>{
    
     message.channel.send("GOODMORNING WORLD",`${message.author}`);
   
    
}