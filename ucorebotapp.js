const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const config = require('./settings.json');
const sql = require('sqlite');
const fs = require('fs');
sql.open('./score.sqlite');


client.on('ready', () => {
	console.log(`Ready to serve in ${client.channels.size} channels on Ucore Discord Server, for a total of ${client.users.size} users.`);
	client.user.setActivity(`Ein Clan? Nein! ... Eine Familie! #UCoreFamily! ♥`);
	client.user.setAvatar('https://cdn.discordapp.com/attachments/336532626376491014/341006459191951361/ucorefertig.png');

	setInterval(() => {
		const guild = client.guilds.find('name', 'Unscripted Cores Clan');
		const collection = guild.members.filter(m => m.presence.status === 'online' && m.hasPermission('ADD_REACTIONS'));
		for (const member of collection.values()) {
			sql.get(`SELECT * FROM scores WHERE userId ="${member.id}"`).then(row => {
				if (!row) {
					sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [member.id, 1, 0]);
				} else {
					let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 5));
					if (curLevel > row.level) {
						row.level = curLevel;
						sql.run(`UPDATE scores SET points = ${row.points + 5}, level = ${row.level} WHERE userId = ${member.id}`);
					}
					sql.run(`UPDATE scores SET points = ${row.points + 5} WHERE userId = ${member.id}`);
				}
			}).catch(() => {
				console.error;
				sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
					sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [member.id, 1, 0]);
				});
			});
		}
	}, 5 * 60 * 1000);
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.type !== 'text') return;
	if (msg.content.startsWith('-points') || msg.content.startsWith('-level') || msg.content.startsWith('-rank') || msg.content.startsWith('-slot')) return;
	if (msg.content.length < 4) return;
	sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${msg.author.id}`);
				msg.reply(`Du bist gerade ein Level aufgestiegen! Du bist jetzt Level **${curLevel}**. Herzlichen Glückwunsch!`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
});

client.on('messageReactionAdd', async messageReaction => {
	let angenommenRole = messageReaction.message.guild.roles.find('name', 'ANGENOMMEN');
	let usermention = messageReaction.message.mentions.members.first();
	let rueckmeldung = client.channels.get('328572253925146633');
	let bewerbungvoting = '328546992735125506';
	let bewerbungangenommen = client.channels.find('name', 'bewerbung-angenommen');

	if (messageReaction.message.channel.id === bewerbungvoting) {
		if (messageReaction.emoji.name === '👍' && messageReaction.count === 4) {
			const ucoreleader = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Leader');
			const ucoremoderator = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Moderator');
			const ucoresupporter = client.guilds.get('328529653088124931').roles.find('name', 'UCore-Supporter');
			const everyone = client.guilds.get('328529653088124931').roles.find('name', '@everyone');

			const newbewerber = client.guilds.get('328529653088124931').channels.filter(g => g.type === 'category').get('362664734589452319');

			await messageReaction.message.guild.createChannel(messageReaction.message.id, 'text')
			.then(c => c.setParent(newbewerber) && c.overwritePermissions(ucoreleader, { VIEW_CHANNEL: true }) && c.overwritePermissions(ucoremoderator, { VIEW_CHANNEL: true }) && c.overwritePermissions(ucoresupporter, { VIEW_CHANNEL: true, SEND_MESSAGES: false }) && c.overwritePermissions(usermention, { VIEW_CHANNEL: true }) && c.overwritePermissions(everyone, { VIEW_CHANNEL: false }) && c.send(`
			Heyho ${usermention}, du bist einen Schritt weiter, herzlichen Glückwunsch! \nTeile uns hier bitte mit, wann du innerhalb der nächsten Zeit für ein Bewerbungsgespräch Zeit hättest, mehrere Termine wären vorteilhaft.
			`));
		
			await usermention.addRole(angenommenRole).then(rueckmeldung.send(`${usermention}, du bist einen Schritt weiter, herzlichen Glückwunsch! Vereinbare im Channel <#${messageReaction.message.id}> bitte einen Termin dafür.`));
			await bewerbungangenommen.send(`**Status der Bewerbung: Angenommen ✅** \n\n--------------------------- \n\n ${messageReaction.message.content}`);
			messageReaction.message.delete();
		}
	}
});

client.on('messageReactionAdd', async messageReaction => {
	let bewerbungabgelehnt = client.channels.find('name', 'bewerbung-abgelehnt');
	let bewerbungvoting = '328546992735125506';
	let usermentionuser = messageReaction.message.mentions.users.first();
	let usermention = messageReaction.message.mentions.members.first();
	let bewerbungssperre = client.guilds.get(messageReaction.message.guild.id).roles.find('name', 'Bewerbungssperre');

	if (messageReaction.message.channel.id === bewerbungvoting) {
		if (messageReaction.emoji.name === '👎' && messageReaction.count === 4) {
			usermentionuser.send(`Hallo lieber Bewerber, \n\nLeider müssen wir dir mitteilen dass du für den Unscripted Cores Clan abgelehnt wurdest. Du kannst dich in 1 Woche wieder neu bewerben. Die Gründe warum du abgelehnt wurdest, werden nicht bekannt gegeben. \n\nLiebe Grüße! \nUnscripted Cores Team \n\n***Bitte beachte dass es sich bei mir um einen Bot handelt der programmiert wurde und daher auf keine Fragen antworten kann!***`);
			bewerbungabgelehnt.send(`**Status der Bewerbung: Abgelehnt ❌** \n\n--------------------------- \n\n${messageReaction.message.content}`);
			messageReaction.message.delete();
			usermention.addRole(bewerbungssperre).then(() => {
		    client.setTimeout(() => {
			usermention.removeRole(bewerbungssperre);
		}, 604800000);
			});
		}
	}
});

client.on('messageReactionAdd', async messageReaction => {
	let bewerbungabgelehnt = client.channels.find('name', 'bewerbung-abgelehnt');
	let bewerbungvoting = '328546992735125506';
	let usermentionuser = messageReaction.message.mentions.users.first();

	if (messageReaction.message.channel.id === bewerbungvoting) {
		if (messageReaction.emoji.name === '👶' && messageReaction.count === 4) {
			usermentionuser.send(`Hallo lieber Bewerber, \n\nLeider müssen wir dir mitteilen, dass deine Bewerbung für den Clan UnscriptedCores abgelehnt wurde. Bei Interesse kannst du in einer Woche eine neue Bewerbung schreiben. \n\nLiebe Grüße! \nUnscripted Cores Team \n\n***Bitte beachte dass es sich bei mir um einen Bot handelt der programmiert wurde und daher auf keine Fragen antworten kann!***`);
			bewerbungabgelehnt.send(`**Status der Bewerbung: Abgelehnt ❌ (Der User ist unter 14)** \n\n--------------------------- \n\n${messageReaction.message.content}`);
			messageReaction.message.delete();
		}
	}
});

client.on('messageReactionAdd', async (messageReaction) => {
	let bewerbungabgelehnt = client.channels.find('name', 'bewerbung-abgelehnt');
	let bewerbungvoting = '328546992735125506';
	let usermentionuser = messageReaction.message.mentions.users.first();

	if (messageReaction.message.channel.id === bewerbungvoting) {
		if (messageReaction.emoji.name === '📝' && messageReaction.count === 4) {
			usermentionuser.send(`Hallo lieber Bewerber, \n\nLeider müssen wir dir mitteilen, dass deine Bewerbung für den Clan UnscriptedCores abgelehnt wurde, da du unser Bewerbungstemplate nicht eingehalten hast. Bei Interesse kannst du uns jederzeit eine neue Bewerbung, welches das Tempalte voll ausgefüllt beinahltet, senden..  \n\nLiebe Grüße! \nUnscripted Cores Team \n\n***Bitte beachte dass es sich bei mir um einen Bot handelt der programmiert wurde und daher auf keine Fragen antworten kann!***`);
			bewerbungabgelehnt.send(`**Status der Bewerbung: Abgelehnt ❌ (Der User hat das Bewerbungstemplate nicht eingehalten)** \n\n--------------------------- \n\n${messageReaction.message.content}`);
			messageReaction.message.delete();
		}
	}
});


client.on('messageReactionAdd', async(messageReaction) => {
	let bewerbungabgelehnt = client.channels.find('name', 'bewerbung-abgelehnt');
	let bewerbungvoting = '328546992735125506';
	let modlog = client.channels.find('name', 'mod-log');
	let usermentionuser = messageReaction.message.mentions.users.first();
	let membermention = messageReaction.message.mentions.members.first();

	if (messageReaction.message.channel.id === bewerbungvoting) {
		if (messageReaction.emoji.name === '‼' && messageReaction.count === 4) {
			messageReaction.message.guild.ban(membermention);
			const embed = new Discord.MessageEmbed()
            .setAuthor(`Discord UCore-Moderationsteam`)
            .setThumbnail(usermentionuser.displayAvatarURL())
            .setColor('#FF0000')
            .setTimestamp()
			.setFooter(`Für einen Entbannungsantrag für den UCore Discord Server, starte eine Unterhaltung mit Monkeyyy11 im Forum: https://www.gommehd.net/forum/conversations/add?to=Monkeyyy11`)
            .setDescription(`**Aktion**: Ban \n**User**: ${usermentionuser.username}#${usermentionuser.discriminator} (${usermentionuser.id}) \n**Grund**: Trollbewerbung / Unangemessene Bewerbung`);
			modlog.send({ embed: embed });
			usermentionuser.send({ embed: embed });
		    bewerbungabgelehnt.send(`**Status der Bewerbung: Abgelehnt (Der User wurde gebannt) ❌** \n\n--------------------------- \n\n ${messageReaction.message.content}`);
		    messageReaction.message.delete();
		}
	}
});

client.on('guildMemberAdd', (member) => {
	member.guild.channels.get(`330004591779512321`).send(`${member}, ist dem UCore Discord Server beigetreten`);
	const embed = new Discord.MessageEmbed()
    .setColor('#0066CC')
    .setThumbnail('https://cdn.discordapp.com/attachments/328545716135788544/337655509442232320/tGlWn6j0BScvSd2EQChrIVtHKLGjLhNt.png')
	.setFooter('© UcoreBot')
	.setTitle('Willkommen auf dem Unscripted Cores Discord Server!')
	.setDescription('Dieses Regelwerk gilt für diesen Discord Server:')
	.addField('Regel 1', 'Jegliche Beleidigung an andere Benutzer, den Discord Server, Außenstehende und sonstige Beteiligten sind verboten. Jeder Konflikt muss im Privatchat auf Discord auf sachlicher Ebene gelöst werden')
	.addField('Regel 2', 'Spam und das Benutzen von sogenannten Selfbots ist verboten')
	.addField('Regel 3', 'Radikalistische, menschenverachtende, gewaltverherrlichende, pornographische, sexistische und rassenfeindliche Äußerungen und Inhalte jeglicher Form sind strengstens untersagt')
	.addField('Regel 4', 'Das Verbreiten von sogenannten “Screamern” ist ebenfalls strengstens untersagt')
	.addField('Regel 5', 'Werbung in allen Formen ist verboten')
	.addField('Regel 6', 'Drohungen, ob leer oder ernst, sind verboten')
	.addField('Regel 7', 'Die Caps-Funktion ist deaktiviert zu lassen')
	.addField('Regel 8', 'Respektlose und provozierende Aussagen sind unerwünscht');
	// --------------------------------------------------------
	const embed2 = new Discord.MessageEmbed()
    .setColor('#0066CC')
    .setThumbnail('https://cdn.discordapp.com/attachments/328545716135788544/337655509442232320/tGlWn6j0BScvSd2EQChrIVtHKLGjLhNt.png')
	.setFooter('© UcoreBot')
	.setTitle('Wie kann man sich dich bei Unscripted Cores bewerben?')
	.setDescription('Ließ dir dazu bitte <#328529653088124931> durch. \nDazu wurde auch ein Youtube Video aufgenommen welches dir auch helfen kann: https://www.youtube.com/watch?v=mHYufvcjWdI \nSolltest du trotzdem Fragen haben kannst du diese gerne in <#328542484688928769> stellen');

	member.send({ embed: embed });
	member.send({ embed: embed2 });
});

client.on('guildMemberRemove', (member) => {
	member.guild.channels.get(`330004591779512321`).send(`${member.user.username} hat den UCore Discord Server verlassen!`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir(`./commands/`, (err, files) => {
	if (err) console.error(err);
	files.forEach(f=> {
		let props = require(`./commands/${f}`);
		client.commands.set(props.help.name, props);
		props.conf.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		});
	});
});

client.elevation = msg => {
	let permlvl = 0;
	let modrole = msg.guild.roles.find('name', 'UCore-Moderator');
	if (modrole && msg.member.roles.has(modrole.id)) permlvl = 2;
	let adminrole = msg.guild.roles.find('name', 'UCore-Leader');
	if (adminrole && msg.member.roles.has(adminrole.id)) permlvl = 3;
	if (msg.author.id === '238590234135101440') permlvl = 4;
	return permlvl;
};

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.id === '357205929139240960' && !msg.content.startsWith('-support')) return msg.delete() && msg.channel.send('In diesem Channel kannst du nur den Support-Befehl benutzen!').then(m => m.delete({ timeout: 10000 }));
	if (msg.content.startsWith('-bewerbung※')) return msg.channel.send(`${msg.author}, Zwischen -bewerbung und ※ muss ein Leerzeichen sein!`);
	if (msg.content.startsWith('-bwucore※')) return msg.channel.send(`${msg.author}, Zwischen -bwucore und ※ muss ein Leerzeichen sein!`);
	if (msg.content.startsWith('※Wie')) return msg.channel.send(`${msg.author}, Es sieht so aus als hättest du den Befehl vor deiner Bewerbung vergessen. Füge vor deine Bewerbung noch \`-bewerbung\` hinzu!`);
	if (msg.content.startsWith('※ Wie')) return msg.channel.send(`${msg.author}, Es sieht so aus als hättest du den Befehl vor deiner Bewerbung vergessen. Füge vor deine Bewerbung noch \`-bewerbung\` hinzu!`);
	if (!msg.content.startsWith(config.prefix)) return;
	if (!msg.guild) return msg.reply('Du musst die Befehle auf dem UCore Discord Server ausführen!');
	var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase();
	var args = msg.content.split(" ").slice(1);
	let perms = client.elevation(msg);
	let cmd;
	if (client.commands.has(command)) {
		cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
		cmd = client.commands.get(client.aliases.get(command));
	}
	if (cmd) {
		if (perms < cmd.conf.permLevel) return;
		cmd.run(client, msg, args);
		msg.delete();
	}
});

client.on('messageUpdate', (oldmsg, msg) => {
	if (!msg.content.startsWith(config.prefix)) return;
	if (!msg.guild) return msg.reply('Du musst die Befehle auf dem UCore Discord Server ausführen!');
	var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase();
	var args = msg.content.split(" ").slice(1);
	let perms = client.elevation(msg);
	let cmd;
	if (client.commands.has(command)) {
		cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
		cmd = client.commands.get(client.aliases.get(command));
	}
	if (cmd) {
		if (perms < cmd.conf.permLevel) return;
		cmd.run(client, msg, args);
		msg.delete();
	}
});

client.login(token);

