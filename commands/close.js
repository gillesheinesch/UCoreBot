exports.run = function(client, msg, args) {
	if (msg.channel.parentID === '362665096583053312') return msg.channel.send('Dieser Channel wurde bereits geschlossen!');
	if (msg.channel.parentID !== '362664734589452319') return msg.channel.send('Dies ist kein Channel der geschlossen werden kann.');

	const ucoreleader = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Leader');
	const ucoremoderator = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Moderator');
	const ucoresupporter = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Supporter');

	if (!msg.member.roles.get(ucoreleader.id) && !msg.member.roles.get(ucoremoderator.id) && !msg.member.roles.get(ucoresupporter.id)) return msg.channel.send('Du hast nicht die Berechtigung diesen Channel zu schließen!');
	const closedbewerber = client.guilds.get('328529653088124931').channels.filter(g => g.type === 'category').get('362665096583053312');

	return msg.channel.setParent(closedbewerber) && msg.channel.overwritePermissions(ucoreleader, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(ucoremoderator, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(ucoresupporter, { SEND_MESSAGES: false }) && msg.channel.overwritePermissions(msg.author, { SEND_MESSAGES: false });
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};
exports.help = {
	name: 'close',
	description: 'Closed einen "Angenommenen-Bewerber"-Channel',
	usage: 'close',
	example: 'close',
	category: 'administration'
};
