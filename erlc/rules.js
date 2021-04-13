const Discord = require('discord.js');

module.exports = {
    name: "rules",
    description: "Gives info about the bot",
    async run (client, message, args) { 
  
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('RULES')
        .addField('No blue/red undercover cars without pass (!Permit)', '(Brncray & U are a bot')
        .addField('No racist slurs or anything that will insult someone..', 'Nig**')
        .addField('No frp', '(full kill)')
        .addField('Follow the rule above!', 'No frp')

  
        message.channel.send(infoEmbed);
    }
}