const Discord = require('discord.js');
const config = require('../settings.json');
exports.run = (client, msg, args) => {
	const embed = new Discord.MessageEmbed()
    .setFooter(`Du kannst ${config.prefix}commands {Modulname} eingeben um eine Liste aller Befehle in einem Modul zu bekommen`)
    .setColor('0066CC')
    .setDescription('**Eine Liste aller Module**\n► Administration \n► Help \n► Utility \n► Fun \n► Searches');
	msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['m'],
	permLevel: 0
};

exports.help = {
	name: 'modules',
	description: 'Gibt dir eine Liste aller verfügbaren Module',
	usage: 'modules',
	example: 'modules',
	category: 'help'
};
