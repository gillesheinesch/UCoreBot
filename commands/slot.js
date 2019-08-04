const slotThing = [':grapes:', ':tangerine:', ':pear:', ':cherries:'];
const Discord = require('discord.js');
var lastUsed = 0;
const sql = require('sqlite');
sql.open("../score.sqlite");
exports.run = (client, msg, args) => {
	let custommessages = ["Mach mal langsam hier, du kannst dieses Minigame nur alle 3 Sekunden spielen! 🛎", "Du betrittest nun den #Anti-USpamm Modus. Du kannst dieses Minigame nur alle 3 Sekunden spielen!", "Du wirst noch früh genug gewinnen aber bitte hör auf mich so schnell zu benutzen. Du kannst dieses Minigame nur alle 3 Sekunden spielen! 😢"];
	let randomofmessages = custommessages[Math.floor(Math.random() * custommessages.length)];
if (msg.channel.id === '341324671674875905') {
	if(new Date().getTime() - lastUsed > 3000) {
	const slotOne = slotThing[Math.floor(Math.random() * slotThing.length)];
	const slotTwo = slotThing[Math.floor(Math.random() * slotThing.length)];
	const slotThree = slotThing[Math.floor(Math.random() * slotThing.length)];
	if (slotOne === slotTwo && slotOne === slotThree) {
		const embed1 = new Discord.MessageEmbed()
		.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
		.setColor('#3ADF00')
		.addField(`${slotOne}|${slotTwo}|${slotThree}`, `Triple! Herzlichen Glückwunsch, du hast gewonnen! \nDir wurden 50 Punkte gutgeschrieben.`);
		msg.channel.send({ embed: embed1 });
sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 50));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 50}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 50} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
	lastUsed = new Date().getTime();
	} else 
	if (slotOne === slotTwo || slotTwo === slotThree) {
		const embed3 = new Discord.MessageEmbed()
		.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
		.setColor('#3ADF00')
		.addField(`${slotOne}|${slotTwo}|${slotThree}`, `Double! Herzlichen Glückwunsch, du hast gewonnen! \nDir wurden 5 Punkte gutgeschrieben.`);
		msg.channel.send({ embed: embed3 });
sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 5));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 5}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 5} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	lastUsed = new Date().getTime();
	});
	} else {
	const embed2 = new Discord.MessageEmbed()
	.setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
	.setColor('#3ADF00')
	.addField(`${slotOne}|${slotTwo}|${slotThree}`, `Leider hast du verloren. \nDir wurden 5 Punkte abgezogen.`);
		msg.channel.send({ embed: embed2 });
sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 5));
			if (curLevel < row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points - 5}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points - 5} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
	}
lastUsed = new Date().getTime();
	} else 
	msg.reply(randomofmessages);
} else
msg.reply('Du kannst dieses Minigame nur im folgendem Channel spielen: <#341324671674875905>');
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
};
exports.help = {
	name: 'slot',
	description: 'Spiel eine Runde SLOT',
	usage: 'slot',
	example: 'slot',
	category: 'fun'
};
