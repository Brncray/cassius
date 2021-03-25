const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "Gives info about the bot",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Info About the Bot')
        .addField('Library:', '`Discord.js V12`')
        .addField('Author:', '`Brncray#2527`')
        .addField(`Owner`, '`Himaa#2006`')
        .addField('Date Made:', '`3/19/2021`')

  
        message.channel.send(infoEmbed);
    }
}