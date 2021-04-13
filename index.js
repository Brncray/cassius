const erlc = require("./structures/erlc")
const brnclient = require("./structures/brnClient")
const bl1tz = require ("./structures/bl1tz")
const brnClient2 = require ("./structures/brnClient2")
const himma = require ("./structures/himmaclient")
new brnclient().start("", "./brmcommands") //Brncray1 Token
new bl1tz().start("", "./bl1tzcommands") //Brncray other bot
new brnClient2().start("", "./brncommands2")// Brncray's 3rd bot.
new himma().start("", "./himmautils")// Brncray's 4th bot.
new erlc().start("", "./erlc")
