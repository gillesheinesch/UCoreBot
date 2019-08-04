const Discord = require('discord.js');
var lastUsed = 0;
exports.run = (client, msg, args) => {
	const custommessages = ["Mach mal langsam hier, du kannst dieses Minigame nur alle 3 Sekunden spielen! 🛎", "Du betrittest nun den #Anti-USpamm Modus. Du kannst dieses Minigame nur alle 3 Sekunden spielen!", "Du wirst noch früh genug gewinnen aber bitte hör auf mich so schnell zu benutzen. Du kannst dieses Minigame nur alle 3 Sekunden spielen! 😢"];
	const randomofmessages = custommessages[Math.floor(Math.random() * custommessages.length)];
	if (msg.channel.id === '341324671674875905') {
	if(new Date().getTime() - lastUsed > 3000) {
    var margs = msg.content.split(" ");
	let validation = ["schere", "stein", "papier"];
    let randomofvalidation = validation[Math.floor(Math.random() * validation.length)];
    const sql = require("sqlite");
    sql.open("../score.sqlite");
    
    if (typeof margs[1] !== "undefined");
        
		for (i = 0; i < margs.length; i++) {
			if (validation.indexOf(margs[i].toLowerCase()) >= 0) {
				if (margs[1].toLowerCase() == "stein") {
					if (randomofvalidation == "stein") {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Stein gewählt! ✊** \nGleichstand!`);
			msg.channel.send({ embed: embed1 });
			lastUsed = new Date().getTime();
        } else
            if (randomofvalidation == "schere") {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Schere gewählt! ✌** \nDu hast gewonnen. Dir wurden 10 Punkte hinzugefügt.`);
			msg.channel.send({ embed: embed2 });
			lastUsed = new Date().getTime();

     sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 10));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
        } else
            if (randomofvalidation == "papier") {
                const embed3 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Papier gewählt! ✋** \nDu hast verloren. Dir wurden 10 Punkte abgezogen.`);
			msg.channel.send({ embed: embed3 });
			lastUsed = new Date().getTime();
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 10));
			if (curLevel < row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points - 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points - 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
            }
        } else
        if (margs[1].toLowerCase() == "schere") {
            if (randomofvalidation == "papier") {
             const embed4 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Papier gewählt! ✋** \nDu hast gewonnen. Dir wurden 10 Punkte hinzugefügt.`);
			msg.channel.send({ embed: embed4 });
			lastUsed = new Date().getTime();
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 10));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
        } else
            if (randomofvalidation == "stein") {
                const embed5 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Stein gewählt! ✊** \nDu hast verloren. Dir wurden 10 Punkte abgezogen.`);
			msg.channel.send({ embed: embed5 });
			lastUsed = new Date().getTime();
     sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 10));
			if (curLevel < row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points - 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points - 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
        } else

            if (randomofvalidation == "schere") {
            const embed6 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Schere gewählt! ✌** \nGleichstand!`);
			msg.channel.send({ embed: embed6 });
			lastUsed = new Date().getTime();
        }
        } else
        if (margs[1].toLowerCase() == "papier") {
            if (randomofvalidation == "schere") {
            const embed7 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Schere gewählt! ✌** \nDu hast verloren. Dir wurden 10 Punkte abgezogen.`);
			msg.channel.send({ embed: embed7 });
			lastUsed = new Date().getTime();
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 10));
			if (curLevel < row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points - 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points - 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
        } else

            if (randomofvalidation == "papier") {
            const embed8 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Papier gewählt! ✋** \nGleichstand!`);
			msg.channel.send({ embed: embed8 });
			lastUsed = new Date().getTime();
        } else

            if (randomofvalidation == "stein") {
                const embed9 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#0066CC')
            .setThumbnail('https://cdn.discordapp.com/attachments/339131858283528192/341322660397056003/spieltipp-schere-stein-papier.png')
			.setFooter(`Schere, Stein und Papier Minigame`)
			.setDescription(`**Ich habe Stein gewählt! ✊** \nDu hast gewonnen. Dir wurden 10 Punkte hinzugefügt.`);
			msg.channel.send({ embed: embed9 });
			lastUsed = new Date().getTime();
	sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 10));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 10}, level = ${row.level} WHERE userId = ${msg.author.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 10} WHERE userId = ${msg.author.id}`);
		}
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});
}
}
	}
	}
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
	name: 'ssp',
	description: 'Spiel eine Runde Schere, Stein und Papier',
	usage: 'ssp {SCHERE, STEIN, PAPIER}',
	example: 'ssp schere',
	category: 'fun'
};
