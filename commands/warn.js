const Discord = require('discord.js');
exports.run = (client, msg, args) => {
	let reason = args.slice(1).join(' ');
	let user = msg.mentions.users.first();
	let modlog = client.channels.find('name', 'mod-log');

	if (!user) return msg.reply('Du musst den User, den du verwarnen willst, markieren!');
	if (!reason) return msg.reply('Du musst einen Grund für den Warn angeben!');
	if (!modlog) return msg.reply('Ich kann keinen Mod-Channel finden!');


	msg.channel.send(`${user.tag} wurde erfolgreich verwarnt!`).then(m => m.delete({ timeout: 10000 }));

	const embed = new Discord.MessageEmbed()
		.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, `${msg.author.displayAvatarURL()}`)
		.setThumbnail(user.displayAvatarURL())
		.setColor('#fff024')
		.setTimestamp()
		.setDescription(`**Aktion**: Verwarnung \n**User**: ${user.username}#${user.discriminator} (${user.id}) \n**Grund**: ${reason}`);

	user.send({ embed: embed });
	return client.channels.get(modlog.id).send({ embed: embed });
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};
exports.help = {
	name: 'warn',
	description: 'Verwarnt einen User mit einem bestimmten Grund',
	usage: 'warn @USER {GRUND}',
	example: 'warn @Kevin Unnötiges erwähnen von Teammitgliedern',
	category: 'administration'
};
