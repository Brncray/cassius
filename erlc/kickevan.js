const Client = require("../structures/brnClient");
const {
    Message,
    Role,
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: "kick",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const {
            member,
            mentions
        } = message
        if(!member.hasPermission('KICK_MEMBERS' || 'ADMINISTRATOR'))
        {
            const msg = await message.channel.send(new MessageEmbed()
                .setDescription('❌You don\'t have the right permisions. \nNeeded permissions is `KICK_MEMBERS` or `ADMINISTRATOR`')
                .setColor('RED')
            );
            msg.delete({timeout: 20000});
            setTimeout(() => {
                message.delete().catch(O_o=>{})
            });
            return;
        }
        const target = mentions.members.first()
        if(target)
        {
            const targetMember = message.guild.members.cache.get(target.id);
            if(targetMember.hasPermission('ADMINISTRATOR'))
            {
                const msg = await message.channel.send(new MessageEmbed()
                    .setDescription(`${target.displayName} is an admin!`)
                    .setColor('RED')
                );
                msg.delete({timeout: 20000});
                setTimeout(() => {
                    message.delete().catch(O_o=>{})
                }, 20000);
                return;
            }
            var reason = args.splice(1).join(' ');
            if(!reason)
            {
               const msg = await message.channel.send(new MessageEmbed()
                    .setDescription(`❌A reason is required to kick ${target.displayName}`)
                    .setColor('RED')
                )
                msg.delete({timeout: 20000})
                setTimeout(() => {
                    message.delete().catch(O_o=>{})
                }, 20000);
                return;
            }
            targetMember.kick({reason: reason})
            .catch(error => {
               return message.channel.send(new MessageEmbed()
                    .setDescription(`Coulden't kick the person due to ${error}`)
                    .setColor('RED')
                )
            })
            message.channel.send(new MessageEmbed()
                .setDescription(`${target}, has succsessfully gotten kicked for ${reason}`)
                .setColor('GREEN')
            )

            targetMember.send(new MessageEmbed()
                .setDescription(`You have been kicked from \`${message.guild.name}\` for ${reason}.`)
                .setColor('GREEN')
            )
            var channel = message.guild.channels.cache.find(ch => ch.name.toLowerCase().includes('log'));
            channel.send(new MessageEmbed()
            .setTitle('Member Kicked')
            .addField(`\`Kicked Member\``, `${target}`)
            .addField('\`Reason\`', `${reason}`)
            .addField('`Channel`', `${message.channel.name}`)
            .addField(`\`Person who kicked them\``, `${message.author}`)
            .setColor('RANDOM')
            )
        } else
        {
            const msg = await message.channel.send(new MessageEmbed()
                .setDescription('❌Please tag a person \n Command Format: !kick <member> <reason>')
                .setColor('RED')
            );
            msg.delete({timeout: 20000});
            setTimeout(() => {
                message.delete().catch(O_o=>{})
            }, 20000);
        }
    }
}