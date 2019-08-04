exports.run = (client, msg, args) => {
	if (msg.author.bot) return;
	if (msg.channel.id === '328542484688928769') {
		let bewerbung = args.slice().join(' ');
		if (!bewerbung) return msg.reply('Du musst deine Bewerbung nach -bwucore eingeben! Hier kannst du dir nochmal das Template durchlesen: <#328529653088124931> \nBitte beachte ebenfalls dass zwischen -bwucore und dem ersten Buchstaben danach, ein Leerzeichen vorhanden sein muss!').then(m => m.delete({ timeout: 20000 })); {
			msg.channel.send(`${msg.author}, Deine Bewerbung wurde erfolgreich an das UCore-Team weitergeleitet! Wir werden uns in Kürze wieder bei dir melden! \nWir bitten dich ebenfalls nicht bei den Teammitgliedern den Stand deiner Bewerbung nachzufragen. Danke!`).then(m => m.delete({ timeout: 25000 }));
			let files;
			if (msg.attachments.size) {
				files = msg.attachments.first().url;
			}
			client.channels.get('328546992735125506').send(`📌 NEUE BEWERBUNG FÜR DEN UNSCRIPTED CORES CLAN 📌 \n\n \`\`\`${msg.cleanContent}\`\`\` \n\n▶ Bewerbung von folgendem User: ${msg.author} ◀`, { files, disableEveryone: true }).then(m => { 
				m.react('👍'); m.react('👎'); m.react('‼'); m.react('📝'); m.react('👶');
			});
		}
	} else
	msg.reply('Du kannst dich nur in folgendem Channel bewerben: <#328542484688928769>');
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['bwucore'],
	permLevel: 0
};
exports.help = {
	name: 'bewerbung',
	description: 'Bewirb dich bei Unscripted Cores mit diesem Befehl (Du musst diesen Befehl im #bewerbung Channel ausführen)',
	usage: 'bewerbung {BEWERBUNGSTEXT}',
	example: 'bewerbung ※Wie möchtest du genannt werden? Jonas ...',
	category: 'utility'
};
