  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const commands = new Discord.MessageEmbed()
        .setTitle('Things')
        .addField('`!permits`', 'Blue car permits!')
        .setTimestamp()


        const pages = [
                commands
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}