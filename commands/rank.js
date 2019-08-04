const Discord = require('discord.js');
const sql = require("sqlite");
sql.open("../score.sqlite");
exports.run = (client, msg, args) => {
if (msg.channel.id === '333238366906875906') {
let input = parseInt(args.slice().join(' '));
if (!input) {
    sql.all(`SELECT * FROM scores GROUP BY userId ORDER BY points DESC LIMIT 10`).then(rows => {
        let embed = new Discord.MessageEmbed()
            .setFooter('© UcoreBot | Rangliste')
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC');

        let userArray = [];
        let moneyArray = [];
        let levelArray = [];
        let tempArray = [];

	rows.forEach(row => {
        const member = msg.guild.member(row.userId);
        userArray.push(member ? member.displayName : row.userId);
        moneyArray.push(row.points);
        levelArray.push(row.level);
    });
	for (i = 0; i < userArray.length; i++) {
		tempArray.push((i+1) + ". " + userArray[i]);
}

        embed.addField('Name', tempArray.join('\n'), true);
        embed.addField('Punkte', moneyArray.join('\n'), true);
        embed.addField('Level', levelArray.join('\n'), true);
        
        msg.channel.send({ embed });
    });
} else {
if (input > 50) return msg.reply('Du kannst dir nur die TOP 1 bis TOP 50 anzeigen lassen');
    sql.all(`SELECT * FROM scores GROUP BY userId ORDER BY points DESC LIMIT ${input}`).then(rows => {
        let embed = new Discord.MessageEmbed()
            .setFooter('© UcoreBot | Rangliste')
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC');

            let userArray = [];
            let moneyArray = [];
            let levelArray = [];
            let tempArray = [];
    
        rows.forEach(row => {
            const member = msg.guild.member(row.userId);
            userArray.push(member ? member.displayName : row.userId);
            moneyArray.push(row.points);
            levelArray.push(row.level);
        });
      
        for (i = 0; i < userArray.length; i++) {
            tempArray.push((i+1) + ". " + userArray[i]);
    } 
            embed.addField('Name', tempArray.join('\n'), true);
            embed.addField('Punkte', moneyArray.join('\n'), true);
            embed.addField('Level', levelArray.join('\n'), true);

            msg.channel.send({ embed });
        });
}
    } else {
        msg.reply('Du kannst diesen Befehl nur in folgendem Channel ausführen: <#333238366906875906>');
    }
};

exports.conf = {
	enabled: true,
	guildOnly: true,
    aliases: ['r'],
    permLevel: 0
};
exports.help = {
	name: 'rank',
	description: `Rangliste, den Punkten nach sortiert`,
    usage: 'rank [1-50]',
    example: 'rank 20',
	category: 'utility'
};
