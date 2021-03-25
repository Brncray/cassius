
const brnclient = require("./structures/brnClient")
const bl1tz = require ("./structures/bl1tz")
const brnClient2 = require ("./structures/brnClient2")
const himma = require ("./structures/himmaclient")
new brnclient().start("ODIxNDU4NDg5OTY3OTAyNzIw.YFEA1Q.N5-dm6mDhk3oZE9a43gfwuZlfMU", "./brmcommands") //Brncray1 Token
new bl1tz().start("ODE0NTg1OTUxNDgwOTcxMjY1.YDgASQ.ADNRiw7MNX4SrBJ--yJm6OJEQIQ", "./bl1tzcommands") //Brncray other bot
new brnClient2().start("ODIyMTcxNTIxNjYwNzQ3ODQ3.YFOY5Q.yyBXDRB_TpR8cbxkMZm2QWz96Ws", "./brncommands2")// Brncray's 3rd bot.
new himma().start("ODIyNTA0MTgzODY0NzU0MTc2.YFTOtg.O--wvL7GtNmmkHk7dHd3XWPHrPE", "./himmautils")// Brncray's 4th bot.