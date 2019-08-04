const got = require('got');
const API_KEY = 'dc6zaTOxFJmzC';
const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
	if (args.length < 1) {
        msg.channel.send('Du musst angeben nach welchem GIF du gerne suchen möchtest.').then(m => m.delete({ timeout: 10000 }));
    }

    const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(args.join(' '))}`, { json: true });

    if (!res || !res.body || !res.body.data) {
        msg.channel.send('Konnte kein GIF finden, welches deiner Anforderung entspricht.').then(m => m.delete({ timeout: 10000 }));
    }

    const embed = new Discord.MessageEmbed()
    .setImage(`${res.body.data.image_url}`)
    .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
    .setFooter('© UcoreBot')
	.setColor('#0066CC');
    msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};
exports.help = {
	name: 'gif',
	description: 'Gibt dir ein GIF deiner Wahl',
    usage: 'gif {STICHWORT}',
    example: 'gif Minecraft',
	category: 'searches'
};
