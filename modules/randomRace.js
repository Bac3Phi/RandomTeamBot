module.exports = randomRace = (args) => {
	let message = '';

	if (!args.length) {
		return `You didn't provide any arguments`;
	}

	let races = ['Zerg', 'Terrans', 'Protoss'];
	args.forEach((member) => {
		let randomRace = races[Math.floor(Math.random() * races.length)];
		message +=`${member}: ${randomRace}\n`;
	});

	return message;
};
