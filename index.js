const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const prefix = '*';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (msg.content === 'ping') {
    msg.reply('pong');
  }else if (command === 'random') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    }
    let team_size = args.shift()
    let team_group = [];
    let message = "";
    
    args.sort(function(){
        return Math.round(Math.random()) - 0.5;
    });

    var totalTeams = Math.ceil(args.length/team_size);  
    
    var i,j,temparray,chunk = totalTeams;
    for (i=0,j=args.length; i<j; i+=chunk) {
        temparray = args.slice(i,i+chunk);
        team_group.push(temparray);
    }

    team_group.map((team, index)=> {
      message+=`Team ${index + 1}: ${team}\n`;
    })
    msg.channel.send(`Team group: ${team_size}\n${message}`);
  }
});
client.login(process.env.token);