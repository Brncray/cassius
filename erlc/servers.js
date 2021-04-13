const Discord = require("discord.js");

const client = new Discord.Client();

module.exports = {
    name: 'servers',
    description: "View what servers the bot is in",
    run (client, message, args) {
  
if(message.author.id != "539213950688952320") return message.channel.send("I am sorry but you do not have access to this command!")
  message.channel.send(`Serving ${client.guilds.size} servers`)
  message.channel.send(client.guilds.cache.map(g=>g.name).join('\n'))
  }

}
