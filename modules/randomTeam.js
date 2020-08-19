module.exports = randomTeam = (args) => {
  let message = "";

  if (!args.length) {
    return `You didn't provide any arguments`;
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

  team_group.map((team, index) => {
    message += `Team ${index + 1}: ${team}\n`;
  });

  return `Team group: ${team_size}\n${message}`;
};
