const math = require('math-expression-evaluator');
const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    if (args.length < 1) {
        return msg.channel.send('Du musst angeben, was du gerne rechnen möchtest!');
    }

    const question = args.join(' ');

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return msg.channel.send(`Ungültige mathematische Rechnung: ${err}`);
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(` **Rechnung:**\n\`\`\`\n${question}\n\`\`\` **Resultat:**\n\`\`\`\n${answer}\n\`\`\``)
    .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
    .setFooter('© UcoreBot')
	.setColor('#0066CC');
    msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
    aliases: ['cal'],
    permLevel: 0
};
exports.help = {
	name: 'calculator',
	description: 'Rechnet für dich eine Rechnung',
    usage: 'calculator {RECHNUNG}',
    example: 'calculator 1*20',
	category: 'utility'
};
