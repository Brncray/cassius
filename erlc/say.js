const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",

    async run (client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don\'t have permission to run this command");
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}