const Client = require("../structures/brnClient")
const { Message } = require('discord.js');
module.exports = {
    name: "ping",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send('Pinging..')
        await msg.edit(client.embed({
            title: "Pong!",
            description: `WebSocket ping is ${client.ws.ping}MS! \nMessage edit ping is ${msg.createdAt = message.createdAt}`,
            color: "00ff00"
        }, message))
        await msg.edit("");
    }
}