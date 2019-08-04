exports.run = (client, msg, args) => {
	msg.channel.sendMessage('', {
		embed: {
			color: 3447003,
			description: `**📋 Alle Text-Channel:**\n${msg.guild.channels.filter(textChannel => textChannel.type === `text`).map(textchannel => `**#${textchannel.name}** (*${textchannel.id}*)`).join('\n') || 'Kein Text-Channel auf diesem Server!'}`

		}
	});
	msg.channel.sendMessage('', {
		embed: {
			color: 3447003,
			description: `**📡 Alle Voice-Channel:**\n${msg.guild.channels.filter(voiceChannel => voiceChannel.type === `voice`).map(voicechannel => `**${voicechannel.name}** (*${voicechannel.id}*)`).join('\n') || 'Kein Voice-Channel auf diesem Server!'}`
		}
	});
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};
exports.help = {
	name: 'channels',
	description: 'Gibt dir eine Liste aller Channel die es auf diesem Discord Server gibt.',
	usage: 'channels',
	example: 'channels',
	category: 'utility'
};
