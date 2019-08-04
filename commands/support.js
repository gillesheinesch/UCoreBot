exports.run = async(client, msg, args) => {
    const text = args.slice().join(' ');
    if (!text) return msg.channel.send('Du musst dein Anliegen schildern.');

	var margs = msg.content.split(" ");
	const ucoreleader = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Leader');
	const ucoremoderator = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Moderator');
	const ucoresupporter = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Supporter');
	const everyone = client.guilds.get('328529653088124931').roles.find('name', '@everyone');
	
	const validation = ['close', 'ban'];

		for (var i = 0; i < validation.length; i++) {
			if (validation.indexOf(margs[i].toLowerCase()) >= 0) {
				if (margs[1].toLowerCase() === "close") {
					if (msg.member.roles.find('name', 'UCore-Leader') || msg.member.roles.find('name', 'UCore-Moderator') || msg.member.roles.find('name', 'UCore-Supporter')) {
						if (isNaN(msg.channel.name)) return msg.channel.send('Dieser Text-Channel ist kein Support Channel!');

						const closedtickets = client.guilds.get('328529653088124931').channels.filter(g => g.type === 'category').get('362653479438909442');

						if (msg.channel.parent === closedtickets) return msg.channel.send('Dieses Ticket wurde bereits geschlossen!');

						msg.channel.send(`Dieses Support Ticket wurde vom UCore-Team geschlossen! \nSolltest du eine weitere Fragen haben, dann kannst du gerne ein neues Support Ticket erstellen.`);
						return msg.channel.setParent(closedtickets) && msg.channel.overwritePermissions(ucoreleader, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(ucoremoderator, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(ucoresupporter, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(msg.author, { SEND_MESSAGES: false });
					}
				}
			}
		}

	if (msg.channel.id !== '357205929139240960') return msg.channel.send('Du kannst nur ein Support-Ticket im folgenden Channel erstellen: <#357205929139240960>!').then(m => m.delete(10000));		
	const opentickets = client.guilds.get('328529653088124931').channels.filter(g => g.type === 'category').get('362646267014283267');
	await msg.guild.createChannel(msg.id, 'text')
	.then(c => c.setParent(opentickets) && c.overwritePermissions(ucoreleader, { VIEW_CHANNEL: true }) && c.overwritePermissions(ucoremoderator, { VIEW_CHANNEL: true }) && c.overwritePermissions(ucoresupporter, { VIEW_CHANNEL: true }) && c.overwritePermissions(msg.author, { VIEW_CHANNEL: true }) && c.overwritePermissions(everyone, { VIEW_CHANNEL: false }) && c.send(`
	Neues Support-Ticket von ${msg.author}
	\`\`\`${text}\`\`\` \nDu hast nun dein Support Ticket erfolgreich erstellt, bitte gedulde dich bis ein UCore-Teammitglied antwortet ❕
	`));
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlvl: 0
};

exports.help = {
	name: 'support',
	description: 'Erstelle ein Support Ticket',
	usage: 'support {Deine Supportanfrage}',
	example: 'support Hey, Wie kann man sich bewerben?',
	category: 'utility'
};
