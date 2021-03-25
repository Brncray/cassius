  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`!kick`', 'Kicks a member from your server with mention or ID')
        .addField('`!ban`', 'Bans a member from your server with mention or ID')
        .addField('`!clear`', 'Purges messages')
        .addField('`!Mute/Unmute`', 'Mutes or unmutes a person. || !unmute @Jeff')
        .addField('`!Warn`', 'Warns a person || Currently doesn\'t work')
        .addField('`!warnings`', 'Checks a user\'s warnings')
        .addField('`!deletewarns`', 'Deletes someone\'s warnings')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`!meme`', 'Generates a random meme')
        .addField('`!ascii`', 'Shows Ascii text')
        .addField('`!say`', 'Get the bot to say something || !say hello :)')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`!Covid`', `See stats for COVID-19 (ex: !covid canada || !canada all`)
        .addField('`!ping`', 'Get the bot\'s API ping')
        .addField('`!setprefix`', 'Changes the bot\'s prefix (currently isn\'t working)')
        .addField('`!weather`', 'Get the weather of a location || !weather New Jersey')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}