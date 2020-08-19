const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const commandRandom = require('./modules/random')
const prefix = '*';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    msg.reply('xua con cat');
  }else if (command === 'random') {
    msg.channel.send(commandRandom(args));
  }
});
console.log("Token: ",process.env.token.substr(0,20)+"...");
client.login(process.env.token);