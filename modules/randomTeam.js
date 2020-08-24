const defaultMessageTemplate = require('./BotMessageEmbed');
module.exports = randomTeam = (args) => {
  let message = defaultMessageTemplate();

  if (!args.length) {
    return message.addFields(
      { name: 'Message', value: `You didn't provide any arguments` },
    )
  }

  let team_size = args.shift();
  let team_group = [];

  args.sort(function () {
    return Math.round(Math.random()) - 0.5;
  });

  var totalTeams = Math.ceil(args.length / team_size);

  var i,j,temparray,chunk = totalTeams;
  for (i = 0, j = args.length; i < j; i += chunk) {
    temparray = args.slice(i, i + chunk);
    team_group.push(temparray);
  }

  var i = 0;
  team_group.map((team, index) => {
    let value = "";
    team.forEach(element => {   
        value += element + "\n";
    });
    message.addFields({ name: `Team ${index + 1}`, value: `${value}`, inline: true })
  });

  return message;
};
