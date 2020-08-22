const { MessageEmbed } = require("discord.js");

module.exports = defaultMessageTemplate = (_data) => {
  return new MessageEmbed()
    .setColor('#cfbbdb')
    .setURL('https://github.com/Bac3Phi/RandomTeamBot')
    .setAuthor('Random Bot', 'https://www.serebii.net/pokemonsmile/pokemon/132.png', 'https://github.com/Bac3Phi/RandomTeamBot')
    .setThumbnail('https://www.serebii.net/pokemonsmile/pokemon/132.png')
    .setImage('https://www.serebii.net/pokemonsmile/pokemon/132.png')
    .setTimestamp()
    .setFooter('メタモン', 'https://www.serebii.net/pokemonsmile/pokemon/132.png');
}