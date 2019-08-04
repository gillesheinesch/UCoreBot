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
			.setFooter(`Punkte-Abfrage von ${msg.author.tag}`)
			.setDescription(`**${user1.username} hat leider noch keine Punkte**`);
			if (!row) return msg.channel.send({ embed: embed });
			const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${user1.username}#${user1.discriminator}`, user1.displayAvatarURL())
			.setColor('#0066CC')
			.setFooter(`Punkte-Abfrage von ${msg.author.tag}`)
            .setDescription(`**Aktuelle Punktzahl**: ${row.points}`);
			msg.channel.send({ embed: embed1 });
		});
	} else
	msg.reply('Du kannst diesen Befehl nur in folgendem Channel ausführen: <#333238366906875906>');
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['p'],
	permLevel: 0
};
exports.help = {
	name: 'points',
	description: 'Zeigt die Punkte von dir oder eines Users an',
	usage: 'points [@USER]',
	example: 'points @Monkeyyy11',
	category: 'utility'
};
