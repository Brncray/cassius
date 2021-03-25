const { error } = require('console');
const { MessageEmbed, Client, Collection, Activity } = require('discord.js')
class ModmailClient extends Client {
  constructor() {
    super();
    /*
    dependencies
    */
    this.path = require('path')
    this.discord = require('discord.js')
    this.fs = require('fs')
    /*
    Collections
    */
    this.commands = new Collection();
    this.threads = new Collection();
    /*
    constants
    */
    this.prefix = "+"
  }
  commandHandler(path) {
    this.fs.readdirSync(this.path.normalize(path)).map((f) => {
      const File = require(this.path.join(__dirname, `..`, path, f));
      this.commands.set(File.name, File)
    });
  }
  getCommand(cmd) {
    return this.commands.has(cmd) ? this.commands.get(cmd) : false;
  }
  start(token, path) {
    this.commandHandler(path);
    this.login(token)
    this.on('ready', async () => {
      console.log("Brncray's  second bot is up and running!")
      this.user.setActivity({
        name: `I was enslaved O_O +help`,
        type: "LISTENING"
      })

    })
    this.on('message', async message => {
      this.user.setActivity({
        name: `To you | +help`,
        type: "LISTENING"
      })
      const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
      if (message.author.bot) {
        return;
      }
      if (!message.guild || !message.content.toLowerCase().startsWith(this.prefix)) return;
      const cmd = args.shift().toLowerCase();
      const command = this.getCommand(cmd)
      if (command) return command.run(this, message, args).catch(console.error);
    })
    



  }
  embed(data, message) {
    return new MessageEmbed(data).setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
  }
}
module.exports = ModmailClient