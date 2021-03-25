  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "supporters",
    description: "List of all of our supporters",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const supporter = new Discord.MessageEmbed()
        .setTitle('Supporters')
        .addField('`Kader#9999`', 'First member of the server :tada: (he is swag)')
        .addField('`Girl#1637`', 'Second in the server :tada:')
        .setTimestamp()


        const pages = [
                supporter
                
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}