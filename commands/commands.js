const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const config = require('../settings.json');
	const validation = ['administration', 'help', 'fun', 'searches', 'utility', 'botowner'];
	const margs = msg.content.split(" ");
	const commandNames = Array.from(client.commands.keys());
	const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	const embed = new Discord.MessageEmbed()
	.setColor('#0066CC')
	.setDescription(`Um mehr Informationen über einen Befehl zu erhalten, gibt ${config.prefix}help {commandname} ein`);
	for (i = 0; i < margs.length; i++) {
		if (validation.indexOf(margs[i].toLowerCase()) >= 0) {
			if (margs[1].toLowerCase() === "administration") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "administration").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			} else if (margs[1].toLowerCase() === "utility") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "utility").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			} else if (margs[1].toLowerCase() === "fun") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "fun").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			} else if (margs[1].toLowerCase() === "help") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "help").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			} else if (margs[1].toLowerCase() === "searches") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "searches").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			} else if (margs[1].toLowerCase() === "botowner") {
				msg.channel.send(`${client.commands.filter(c => c.help.category === "botowner").map(cmd => `${config.prefix}${cmd.help.name}${' '.repeat(longest - cmd.help.name.length)} :: ${cmd.help.description}`).join("\n")}`, { code:'asciidoc' });
				return msg.channel.send({ embed: embed });
			}
		}
	}
	msg.channel.send(`Ein Fehler ist aufgetreten! Schau dir lieber nochmal die Liste aller Module mit folgendem Befehl an, ${config.prefix}modules`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['cmds']
};
exports.help = {
	name: 'commands',
	description: 'Alle Befehle in einem Modul',
	usage: 'commands {Modulename}',
	example: 'commands Help',
	category: 'help'
};

