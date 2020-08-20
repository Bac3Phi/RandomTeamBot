const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const randomTeam = require("./modules/randomTeam");
const randomRace = require("./modules/randomRace");
const cat = require("./modules/cat");
const prefix = "*";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    msg.reply('xua con cat');
  }else if (command === 'random_team') {
    msg.channel.send(randomTeam(args));
  }else if (command === 'cat') {
    cat.command(args, msg);
  } else if (command === "random_race") {
    msg.channel.send(randomRace(args));
  }else if (command === 'help') {
    msg.reply('hihi chưa implement help <3');
  }else{
    msg.reply('xua con cat gì deo hiểu, "*help" đi bạn tôi ơi!');
  }
});
cat.help();
console.log("Token: ",process.env.token.substr(0,20)+"...");
client.login(process.env.token);
