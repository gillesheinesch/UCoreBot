exports.run = (client, msg, args) => {
	const input = args.slice().join(' ');
	if (!input) return msg.reply('Du musst einen Spielstatus angeben um diesen Befehl auszuführen');
    client.user.setPresence({ game: { name: `${input}`, type: 0 } });
    msg.channel.send('Status erfolgreich gesetzt.').then(m => m.delete({ timeout: 5000 }));
};

exports.conf = {
	enabled: true,
	guildOnly: false,
    aliases: [],
    permLevel: 4
};
exports.help = {
	name: 'setgame',
	description: 'Setzt einen Status des Discord Bots',
	usage: 'setgame {TEXT}',
	example: 'setgame UCORE BOT',
	category: 'botowner'
};
