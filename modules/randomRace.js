module.exports = randomRace = (args) => {
	let message = '';

	if (!args.length) {
		return `You didn't provide any arguments`;
	}

	let races = ['Zerg', 'Terrans', 'Protoss'];
	args.forEach((member) => {
		let randomRace = Math.floor(Math.random() * races.length);
		return `${member}: ${randomRace}\n`;
	});
};
