const Discord = require('discord.js');
const PersistentCollection = require('djs-collection-persistent');
const table = new PersistentCollection({ name: 'testphase' });
const moment = require('moment');

exports.run = (client, msg, args) => {
	const margs = msg.content.split(' ');
	let validationcommand = ['set', 'check', 'remove'];
	let mentionuser = msg.mentions.users.first();
	let mentionmember = msg.mentions.members.first();
	const testphaserole = msg.guild.roles.find('name', 'Testphase');
	let testmember = [];
	let rolegivenembed = [];

	for (i = 0; i < margs.length; i++) {
		if (validationcommand.indexOf(margs[i].toLowerCase()) >= 0) {
			if (margs[1].toLowerCase() === 'set') {
				if (!mentionuser) return msg.reply('Du musst einen Discord-Member markieren dem du eine Testzeit zuweisen möchtest.').then(m => m.delete({ timeout: 10000 }));
				const roleCheck = mentionmember.roles.find('name', 'Testphase');
				if (roleCheck) return msg.reply(`${mentionmember.displayName} ist bereits in seiner Testphase`).then(m => m.delete({ timeout: 10000 }));
				const check = table.get(mentionuser.id);
				if (mentionuser.id === check) return msg.reply('Der User ist schon in seiner Testphase').then(m => m.delete({ timeout: 10000 }));
				const momenttime = moment(msg.createdTimestamp).format('MMMM Do YYYY, h:mm:ss a');
				const modlogchannel = client.channels.get('328548920508547072');
				const embed = new Discord.MessageEmbed()
				.setColor('#7BB3FF')
				.setTimestamp()
				.setDescription(`${mentionuser.tag} ist nun in seiner Testphase.`)
				.setAuthor(`${msg.author.tag} (${msg.author.id})`, msg.author.displayAvatarURL());
				mentionmember.addRole(testphaserole);
				table.set(mentionuser.id, `${momenttime}`);
				msg.channel.send(`${mentionmember} ist nun in seiner Testphase.`).then(m => m.delete({ timeout: 10000 }));
				modlogchannel.send({ embed });
			} else

if (margs[1].toLowerCase() === 'remove') {
	const roleCheck = mentionmember.roles.find('name', 'Testphase');
	if (!mentionuser) return msg.reply('Du musst einen Discord-Member markieren dem du eine Testzeit zuweisen möchtest.').then(m => m.delete({ timeout: 10000 }));
	if (!roleCheck) return msg.reply(`${mentionmember.displayName} ist nicht in seiner Testphase`).then(m => m.delete({ timeout: 10000 }));
	const modlogchannel = client.channels.get('328548920508547072');
	const embed = new Discord.MessageEmbed()
	.setColor('#7BB3FF')
	.setTimestamp()
	.setDescription(`${mentionuser.tag} ist nun nicht mehr in seiner Testphase.`)
	.setAuthor(`${msg.author.tag} (${msg.author.id})`, msg.author.displayAvatarURL());
	mentionmember.removeRole(testphaserole);
	table.delete(mentionuser.id);
	msg.channel.send(`${mentionmember} ist nun nicht mehr in seiner Testphase.`).then(m => m.delete({ timeout: 10000 }));
	modlogchannel.send({ embed });
} else

if (margs[1].toLowerCase() === 'check') {
	try {
		const embed = new Discord.MessageEmbed()
		.setFooter('© UcoreBot | Testphase-Member')
		.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
		.setColor('#0066CC');
		const collection = msg.guild.roles.find('name', 'Testphase').members;
		for (const member of collection.values()) {
		const memberid = table.get(member.id);
			testmember.push(`${member.displayName}`);
			rolegivenembed.push(`${memberid}`);
		}
		embed.addField('Name', testmember.join('\n'), true);
		embed.addField('Datum', rolegivenembed.join('\n'), true);
		msg.channel.send({ embed });
	} catch (error) {
		msg.channel.send(`Es befindet sich kein User in der Testphase, ${msg.author}!`).then(m => m.delete({ timeout: 10000 }));
	}
} 
	}
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['tp'],
	permlvl: 2
};

exports.help = {
	name: 'testphase',
	description: 'Befehl für die Testphase aller Member',
	usage: 'testphase {set, remove, check (Für check brauch man keinen User zu markieren)} {@USER}',
	example: 'testphase set @Telo',
	category: 'administration'
};
