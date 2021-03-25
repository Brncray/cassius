  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const PG1 = new Discord.MessageEmbed()
        .setTitle('PG1')
        .addField('`&Help`', `THIS`)
        .addField('`&ping`', 'Get the bot\'s API ping')
        .addField('`&weather`', 'Get the weather of a location || &weather New Jersey')
        .addField('`himaa`', 'Get himma\'s youtube, (&yt) also works')
        .addField('`say`', 'Force the bot to say something, (admins only)')
        .addField('`Eval`', 'For owners ONLY.')
        .setTimestamp()

        const PG2 = new Discord.MessageEmbed()
        .setTitle('PG2')
        .addField('`&meme`', `Get a beautiful meme.`)
        .setTimestamp()

        const pages = [
                PG1,
                PG2
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}