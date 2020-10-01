"use strict";
// Packages
const TOKEN = "NzI1ODg0NjI2MTk0NzkyNDg4.XvVOvQ.XMLEd0taZhsRaH1ohmg7F_ZCZg0"
const Discord = require("discord.js");
const bot =new Discord.Client();
const fs = require('fs');




//Bot données
const PREFIX = "&";
bot.PREFIX = PREFIX;

const version = "Alpha1.2";
bot.version = version;

// NutsBots
console.log("Connexion à discord..." );

bot.on("ready", () => {
    console.log(`Connecté en tant que `+ bot.user.tag);
    bot.user.setPresence({activity : { name: version, type:"PLAYING"},status: "dnd"});//Playing , Streaming, Watching, Listening
});

bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err,files) =>{
    if (err)return console.error;
    files.forEach(file =>{
        if(!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`);
        const cmdName = file.split(".")[0];
        console.log(`Commande ${cmdName} chargée.`);
        bot.commands.set(cmdName,props);
    })
});
//Check if a methods is called
bot.on("message", msg => {
    //require("./events/messages.js")(bot,msg);
    //check if the bots is called
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

	const args = msg.content.slice(PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

        if(!bot.commands.has(command))
        {
            return;
        }

        try
        {
          
            bot.commands.get(command).run(bot,msg,args);
        }
        catch(error)
        {
            console.error(error);

        }
    }
);



// erreur
bot.on("error", function(error){
    console.error(`${bot.user.username} a rencontré une erreur de connexion:`);
    console.error(error);
});

// warn
bot.on("warn", function(info){
    console.log(`warn: ${info}`);
});


//TODO:TEST
//Test pour le bot a supprimer aprés
/**
 *
 * @param {Discord.Client} bot
 * @param {Discord.Message} msg
 */
bot.on("message",msg =>{
    if(msg.content.trimLeft() === "bonjour")
    {
        msg.channel.send("salut");
         
    }
})

// Login bot
    bot.login(TOKEN);
    
