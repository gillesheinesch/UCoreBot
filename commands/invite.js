const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#0066CC')
        .setTimestamp()
        .setFooter('© UCore Bot| -help')
        .addField(`📉 Der permante Einladungslink für diesen Discord Server`, `https://www.discord.gg/CNvjRwF`);

	msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['inv'],
	permLevel: 0
};
exports.help = {
	name: 'invite',
	description: 'Gibt dir den permanten Einladungslink für diesen Discord Server',
	usage: 'invite',
	example: 'invite',
	category: 'utility'
};
