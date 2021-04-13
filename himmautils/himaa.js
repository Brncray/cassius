const Discord = require('discord.js');

module.exports = {
    name: "himaa",
    description: "Gives himaa's youtube",
    async run (client, message, args) { 
  
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Himaa Youtube`)
        .setDescription('Click on the title to go to Himaa\'s youtube.')
        .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
  
        message.channel.send(memeEmbed);
    }
}