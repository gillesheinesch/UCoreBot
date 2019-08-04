const Discord = require(`discord.js`);
exports.run = (client, msg, args) => {
	let randomnumber = parseInt(args.slice().join(' '));
	let randomnumberfinished = Math.floor((Math.random() * randomnumber) + 1);

	if (!randomnumber) return msg.reply('Du musst eine Zahl angeben!');
	const embed = new Discord.MessageEmbed()
	.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
    .setColor('#0066CC')
	.setFooter(`Randomnumber`)
	.setDescription(`Die zufällige Zahl lautet: **${randomnumberfinished}**`);
	msg.channel.send({ embed: embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['rn'],
	permLevel: 0
};
exports.help = {
	name: 'randomnumber',
	description: 'Wählt eines zufällige Zahl zwischen X und 1 aus',
	usage: 'randomnumber {X}',
	example: 'randomnumber 100',
	category: 'utility'
};
