const Discord = require('discord.js');

module.exports = {
    name: "himaa",
    description: "Gives himaa's youtube",
    async run (client, message, args) { 
  
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Himaa Youtube`)
        .setDescription('Click on the title to go to Himaa\'s youtube.')
        .setURL(`https://youtube.com/HimaaMinecraft`)
  
        message.channel.send(memeEmbed);
    }
}