const Discord = require('discord.js');
exports.run = (client, msg, args) => {
	const input = msg.content.split(" ");
	let validation = ['1', '2', '3', '4', '5', '6', '7', '8'];

	for (i = 0; i < input.length; i++) {
		if (validation.indexOf(input[i].toLowerCase()) >= 0) {
		if (input[1].toLowerCase() === "1") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 1** : Jegliche Beleidigung an andere Benutzer, den Discord Server, Außenstehende und sonstige Beteiligten sind verboten. Jeder Konflikt muss im Privatchat auf Discord auf sachlicher Ebene gelöst werden');
			return msg.channel.send({ embed: embed });
		} else
		if (input[1].toLowerCase() === "2") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 2** : Spam und das Benutzen von sogenannten Selfbots ist verboten');
			return msg.channel.send({ embed: embed });
		} else
		if (input[1].toLowerCase() === "3") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 3** : Radikalistische, menschenverachtende, gewaltverherrlichende, pornographische, sexistische und rassenfeindliche Äußerungen und Inhalte jeglicher Form sind strengstens untersagt');
			return msg.channel.send({ embed: embed });
		} else
		if (input[1].toLowerCase() === "4") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 4** : Das Verbreiten von sogenannten “Screamern” ist ebenfalls strengstens untersagt');
			return msg.channel.send({ embed: embed });
		}
		if (input[1].toLowerCase() === "5") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 5** : Werbung in allen Formen ist verboten');
			return msg.channel.send({ embed: embed });
		}
		if (input[1].toLowerCase() === "6") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 6** : Drohungen, ob leer oder ernst, sind verboten');
			return msg.channel.send({ embed: embed });
		}
		if (input[1].toLowerCase() === "7") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 7** : Die Caps-Funktion ist deaktiviert zu lassen');
			return msg.channel.send({ embed: embed });
		}
		if (input[1].toLowerCase() === "8") {
			const embed = new Discord.MessageEmbed()
			.setAuthor('Unscripted Cores Discord Regeln', msg.guild.iconURL)
			.setColor('#FF8000')
			.setDescription('**§ Regel 8** : Respektlose und provozierende Aussagen sind unerwünscht');
			return msg.channel.send({ embed: embed });
		}
		}
	}

	const embed = new Discord.MessageEmbed()
	.setColor('#0066CC')
	.setThumbnail('https://cdn.discordapp.com/attachments/328545716135788544/337655509442232320/tGlWn6j0BScvSd2EQChrIVtHKLGjLhNt.png')
	.setFooter('© UcoreBot | Discord Server Regelwerk')
	.setDescription('Dieses Regelwerk gilt für diesen Discord Server:')
	.addField('§ Regel 1', 'Jegliche Beleidigung an andere Benutzer, den Discord Server, Außenstehende und sonstige Beteiligten sind verboten. Jeder Konflikt muss im Privatchat auf Discord auf sachlicher Ebene gelöst werden')
	.addField('§ Regel 2', 'Spam und das Benutzen von sogenannten Selfbots ist verboten')
	.addField('§ Regel 3', 'Radikalistische, menschenverachtende, gewaltverherrlichende, pornographische, sexistische und rassenfeindliche Äußerungen und Inhalte jeglicher Form sind strengstens untersagt')
	.addField('§ Regel 4', 'Das Verbreiten von sogenannten “Screamern” ist ebenfalls strengstens untersagt')
	.addField('§ Regel 5', 'Werbung in allen Formen ist verboten')
	.addField('§ Regel 6', 'Drohungen, ob leer oder ernst, sind verboten')
	.addField('§ Regel 7', 'Die Caps-Funktion ist deaktiviert zu lassen')
	.addField('§ Regel 8', 'Respektlose und provozierende Aussagen sind unerwünscht');

	msg.channel.send({ embed: embed });
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['regeln'],
	permLevel: 0
};
exports.help = {
	name: 'rules',
	description: 'Regeln des Discord Servers',
	usage: 'rules [Regelnummer]',
	example: 'rules 2',
	category: 'utility'
};
