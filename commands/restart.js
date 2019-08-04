exports.run = async (client, msg, args) => {
	await msg.channel.send('Der Bot startet jetzt neu. Bis gleich! 👋');
	process.exit(42);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['reboot'],
	permLevel: 4
};
exports.help = {
	name: 'restart',
	description: 'Restartet den BOT',
	usage: 'restart',
	example: 'restart',
	category: 'botowner'
};
