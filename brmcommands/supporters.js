  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "supporters",
    description: "List of all of our supporters",

    async run (client, message, args){

        

        const supporter = new Discord.MessageEmbed()
        .setTitle('Supporters')
        .addField('`Kader#9999`', 'First member of the server <a:ClapClap:826157355527307298> (he is swag)')
        .addField('`Girl#1637`', 'Second in the server :tada:')
        .addField('`Kawaey#1560`', 'Designed bot profile picture! :tada: (expert brainz)')
        .setTimestamp()


        const pages = [
                supporter
                
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}