const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, msg, args) => {
	const servercreated = moment(msg.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
	const embed = new Discord.MessageEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
		.setColor('#0066CC')
		.setTimestamp()
		.setThumbnail(msg.guild.iconURL)
		.setFooter('© UcoreBot | -help')
		.addField(`💻 Server ID`, msg.guild.id)
		.addField(`🤵 Members`, msg.guild.memberCount)
		.addField(`🗻 Region`, msg.guild.region)
		.addField(`📲 Channels`, msg.guild.channels.size)
		.addField(`⏳ Server gegründet`, servercreated)
		.addField('☑ Verifizierungslevel', msg.guild.verificationLevel || 'Der Server hat kein Verifizierungslevel')
		.addField(`📤 AFK-Channel`, msg.guild.afkChannelID || 'Der Server hat keinen AFK-Channel');

	msg.channel.send({ embed: embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['sinfo'],
	permLevel: 0
};
exports.help = {
	name: 'serverinfo',
	description: 'Zeigt dir Informationen des Discord Servers an',
	usage: 'serverinfo',
	example: 'serverinfo',
	category: 'utility'
};
