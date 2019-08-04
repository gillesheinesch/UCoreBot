const sql = require("sqlite");
const Discord = require('discord.js');
sql.open("../score.sqlite");
exports.run = (client, msg, args) => {
	if (msg.channel.id === '333238366906875906') {
	const user1 = msg.mentions.users.first() || msg.author;
		sql.get(`SELECT * FROM scores WHERE userId ="${user1.id}"`).then(row => {
			const embed = new Discord.MessageEmbed()
            .setAuthor(`${user1.username}#${user1.discriminator}`, user1.displayAvatarURL())
			.setColor('#0066CC')
			.setFooter(`Level-Abfrage von ${msg.author.tag}`)
			.setDescription(`**${user1.username} ist leider noch Level 0**`);
			if (!row) return msg.channel.send({ embed: embed });
			const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${user1.username}#${user1.discriminator}`, user1.displayAvatarURL())
			.setColor('#0066CC')
			.setFooter(`Level-Abfrage von ${msg.author.tag}`)
            .setDescription(`**Aktuelles Level**: ${row.level}`);
			msg.channel.send({ embed: embed1 });
		});
	} else 
	msg.reply('Du kannst diesen Befehl nur in folgendem Channel ausführen: <#333238366906875906>');
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['l'],
	permLevel: 0
};
exports.help = {
	name: 'level',
	description: 'Zeigt das Level von dir oder eines Users an',
	usage: 'level [@USER]',
	example: 'level @Flogik',
	category: 'utility'
};
