const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, msg, args) => {
	const uptimeserver = moment.duration(client.uptime).format('d[ days], h[ hours], m[ minutes and ]s[ seconds]');
	const embed = new Discord.MessageEmbed()
        .setAuthor('UCore Bot', msg.guild.iconURL)
        .setColor('#0066CC')
        .setThumbnail('https://cdn.discordapp.com/attachments/328545716135788544/337655509442232320/tGlWn6j0BScvSd2EQChrIVtHKLGjLhNt.png')
        .setFooter('© UcoreBot | -help')
        .addField(`🖱 Prefix`, 'Alle Befehle werden mit folgendem Prefix ausgeführt: `-`')
        .addField(`⏳ Laufzeit seit dem letzten Restart`, `${uptimeserver}`)
        .addField(`📡 Statistiken über den Bot`, `Online auf dem UCore Discord Server für ${client.users.size} User`)
        .addField(`🇩🇪 Bot Sprache`, `Deutsch`)
        .addField(`👤 Bot Besitzer/Programmierer`, `Monkeyyy11#7584`);

	msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};
exports.help = {
	name: 'botinfo',
	description: 'Informationen über den Discord-Bot',
        usage: 'botinfo',
        example: 'botinfo',
	category: 'utility'
};
