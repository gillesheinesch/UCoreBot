const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
exports.run = async(client, msg) => {
    const user = msg.mentions.users.first() || msg.author;
    const member = msg.guild.member(user) || await msg.guild.fetchMember(user);
    const userondiscord = moment(user.createdTimestamp).format('MMMM Do YYYY, h:mm:ss a');
    const useronserver = moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a');
	const embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setColor('#0066CC')
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL())
        .setFooter('© UcoreBot | -help')
        .addField(`👤 User`, `${user.tag} (${user.id})`)
        .addField(`📥 Discord beigetreten`, userondiscord)
        .addField(`📌 Diesem Discord Server beigetreten`, useronserver)
        .addField(`🏷 Rollen`, member.roles.map(role => role.name).join(', ') || 'Der User hat keine Rollen auf diesem Discord Server')
        .addField('⌚ Status', user.presence.status)
        .addField('🎮 spielt gerade', user.presence.game ? user.presence.game.name : 'nichts');

	msg.channel.send({ embed: embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
    aliases: ['uinfo'],
    permLevel: 0
};
exports.help = {
	name: 'userinfo',
	description: 'Zeigt dir Informationen von dir oder eines Users an',
    usage: 'userinfo [@USER]',
    example: 'userinfo @Dxrren',
	category: 'utility'
};
