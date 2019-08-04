const Discord = require('discord.js');
exports.run = async(client, msg, args) => {
	let reason = args.slice(1).join(' ');
	let user = msg.mentions.users.first();
	let modlog = client.channels.find('name', 'mod-log');

	if (!user) return msg.reply('Du musst einen User zum Kicken markieren.').catch(console.error);
	if (!reason) return msg.reply('Du musst einen Grund für den Kick angeben.');
	if (!modlog) return msg.reply('Ich konnte den #mod-log Channel nicht finden.');

	if (!msg.guild.member(user).kickable) return msg.reply('Ich kann diesen User nicht kicken!');
	let member = await msg.guild.member(user).kick();
	msg.channel.send(`${user.tag} wurde erfolgreich gekickt.!`).then(m => m.delete({ timeout: 10000 }));

	const embed = new Discord.MessageEmbed()
		.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
		.setThumbnail(user.displayAvatarURL())
		.setColor('#FF0000')
		.setTimestamp()
		.setDescription(`**Aktion**: Serverkick \n**User**: ${member.displayName}#${member.user.discriminator} (${user.id}) \n**Grund**: ${reason}`);

	user.send({ embed });
	return client.channels.get(modlog.id).send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};
exports.help = {
	name: 'kick',
	description: 'Kickt einen User vom Discord Server',
	usage: 'kick @USER {REASON}',
	example: 'kick @Crawl Unnötiges Spammen von Emojis',
	category: 'administration'
};
