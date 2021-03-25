const db = require(`quick.db`);

const permission = "MANAGE_SERVER"

module.exports = {
  name: "setprefix",
  description: "Change the prefix of the bot!",

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(`You don\'t have permission to use that! You must have the permission ${permission}`)

    if(!args[0]) return message.channel.send('Please provide a new prefix');

        if(args[1]) return message.channel.send('The prefix can\'t have two spaces');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Succesffully set new prefix to **${args[0]}**`)
  }
}