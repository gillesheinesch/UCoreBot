const Discord = require('discord.js');
const PersistentCollection = require('djs-collection-persistent');
const table = new PersistentCollection({ name: 'clanverwarnungen' });


exports.run = (client, message, args) => {
const validation = ['set', 'check', 'remove'];
const margs = message.content.split(" ");
let mentionmember = message.mentions.members.first();
let mentionuser = message.mentions.users.first();
const modlog = message.guild.channels.get('328548920508547072');

if (!mentionmember) return message.reply('Du musst einen Clanmember markieren!').then(m => m.delete({ timeout: 10000 }));

for (i = 0; i < margs.length; i++) {
	if (validation.indexOf(margs[i].toLowerCase()) >= 0) {
		if (margs[1].toLowerCase() === 'set') {
			const check = table.get(mentionuser.id);
			if (check > 0) {
				table.set(mentionuser.id, check + 1);
				const embed = new Discord.MessageEmbed()
				.setFooter('© UcoreBot | Clanmember Verwarnung')
				.setAuthor(`Verwarnt von ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
				.addField('Name', mentionuser.displayName, true)
				.addField('Derzeitige Verwarnung(en)', check + 1, true)
				.setColor('#0066CC');
				return modlog.send({ embed });
			} else {
			table.set(mentionuser.id, 1);
			const embed = new Discord.MessageEmbed()
			.setFooter('© UcoreBot | Clanmember Verwarnung')
			.setAuthor(`Verwarnt von ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
			.addField('Name', mentionmember.displayName, true)
			.addField('Derzeitige Verwarnung(en)', 1, true)
			.setColor('#0066CC');
			return modlog.send({ embed });
			}
		} else
		if (margs[1].toLowerCase() === 'remove') {
			const check = table.get(mentionuser.id);
			if (!check) return message.reply('Der von dir markierte Clanmember hat keine Verwarnung').then(m => m.delete({ timeout: 10000 }));
			if (check > 0) {
				table.set(mentionuser.id, check - 1);
				const embed = new Discord.MessageEmbed()
				.setFooter('© UcoreBot | Clanmember Verwarnung')
				.setAuthor(`Verwarnung gelöscht von ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
				.addField('Name', mentionmember.displayName, true)
				.addField('Derzeitige Verwarnung(en)', check - 1, true)
				.setColor('#0066CC');
				return modlog.send({ embed });
			} else {
				message.channel.send('Der von dir markierte Clanmember hat keine Verwarnung').then(m => m.delete({ timeout: 10000 }));
			}
		} else
		if (margs[1].toLowerCase() === 'check') {
			const check = table.get(mentionuser.id);
			if (!check) return message.reply('Der Clanmember hat keine Verwarnung!').then(m => m.delete({ timeout: 10000 }));
			const embed = new Discord.MessageEmbed()
			.setFooter('© UcoreBot | ClanMember Verwarnungen')
			.addField('Name', mentionmember.displayName, true)
			.addField('Verwarnung(en)', check, true)
			.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
			.setColor('#0066CC');
			message.author.send({ embed });
		}
	}
}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
    aliases: [],
    permLevel: 2
};
exports.help = {
	name: 'mwarn',
	description: 'Verwarnt einen Clanmember',
    usage: 'mwarn {set, remove, check} {@USER}',
    example: 'mwarn set @Monkeyyy11',
	category: 'administration'
};

