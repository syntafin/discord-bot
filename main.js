const tokenfile = require("./token.json");
// const statusfile = require("./status.json"); replacement for the variables below
// const botconfig = require("./botconfig.json"); possible place to save config, if bot got expanded, example prefix, etc.
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var message = '' // Message to be shown as status
var type = '' // WATCHG, PLAYING
var url = '' // Maybe will be included later

bot.on("ready", () => {
  console.log(`${bot.user.username} is online!`);
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);

  bot.user.setActivity(message, {type: type});
});

bot.login(tokenfile.token);