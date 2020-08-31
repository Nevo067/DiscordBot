/*
const fs = require('fs');
const discord = require("discord.js");
*/
module.exports = async (client, message) => {
    if (message.author.bot) return;
    // Commandes

    if (!message.content.startsWith(client.PREFIX))return;
    const args = message.content.toLocaleLowerCase().slice(client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if(!cmd) return undefined;
    cmd.run(client,message,args);
    
};
