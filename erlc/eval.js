const Discord = require("discord.js");

module.exports = {
    name: "eval",
    description: "eval command lol",

    async run (client, message, args){
    if (message.author.id === '539213950688952320') {
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
    }
    }}
