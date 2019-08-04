const config = require('../settings.json');
exports.run = (client, msg, args) => {
	if (!args[0]) {
		msg.channel.send('Du kannst den Befehl `-modules` benutzen um eine Liste aller verfügbaren Module zu bekommen! \n\nUm eine Liste aller Befehle in einem Modul zu sehen, kannst du folgenden Befehl eingeben `-commands {Modulname}` \n\nUm mehr Informationen über einen Befehl zu bekommen, nutze folgenden Befehl `-help {Befehlsname}`');
	} else {
		let command = args[0];
		if (client.commands.has(command)) {
			command = client.commands.get(command);
			msg.channel.send(`= ${command.help.name} = \n\n${command.help.description}\nBenutzung :: ${config.prefix}${command.help.usage} \nBeispiel :: ${config.prefix}${command.help.example} \n\nAbkürzung :: ${config.prefix}${command.conf.aliases}`, { code: 'asciidoc' });
		}
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['h'],
	permLevel: 0
};
exports.help = {
	name: 'help',
	description: 'Schickt dir die Befehlsliste des Discord Bots oder die genaue Benutzung eines Befehls',
	usage: 'help [Befehl]',
	example: 'help botinfo',
	category: 'help'
};
