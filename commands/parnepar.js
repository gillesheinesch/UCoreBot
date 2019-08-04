var lastUsed = 0;
exports.run = (client, msg, args) => {
    let custommessages = ["Mach mal langsam hier, du kannst dieses Minigame nur alle 3 Sekunden spielen! 🛎", "Du betrittest nun den #Anti-USpamm Modus. Du kannst dieses Minigame nur alle 3 Sekunden spielen!", "Du wirst noch früh genug gewinnen aber bitte hör auf mich so schnell zu benutzen. Du kannst dieses Minigame nur alle 3 Sekunden spielen! 😢"];
	let randomofmessages = custommessages[Math.floor(Math.random() * custommessages.length)];
    if (msg.channel.id === '341324671674875905') {
    if(new Date().getTime() - lastUsed > 3000) {
    const validation = ["ungerade", "gerade"];
    const sql = require('sqlite');
    sql.open("../score.sqlite");
    const Discord = require('discord.js');
    const margs = msg.content.split(" ");
    const randomnumber = parseInt(args.slice(1).join(' '));
    let randomnumberbetween1and5 = Math.floor((Math.random() * 5) + 1);

    if (typeof margs[1] !== "undefined");
    if (!randomnumber) return msg.reply('Du musst eine Zahl zwischen 1-5 wählen.');
    for (i = 0; i < margs.length; i++) {
        if (validation.indexOf(margs[i].toLowerCase()) >= 0) {
    if (margs[1].toLowerCase() === 'gerade') {
        // 1-5
        if (randomnumber === 1 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __1__ gewählt \nIch habe __ungerade__ und __2__ gewählt \n\n**Summe: 3** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __1__ gewählt \nIch habe __ungerade__ und __1__ gewählt \n\n**Summe: 2** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __1__ gewählt \nIch habe __ungerade__ und __3__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __1__ gewählt \nIch habe __ungerade__ und __4__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __1__ gewählt \nIch habe __ungerade__ und __5__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        // 2-5
        if (randomnumber === 2 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __2__ gewählt \nIch habe __ungerade__ und __1__ gewählt \n\n**Summe: 3** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __2__ gewählt \nIch habe __ungerade__ und __2__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __2__ gewählt \nIch habe __ungerade__ und __3__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __2__ gewählt \nIch habe __ungerade__ und __4__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __2__ gewählt \nIch habe __ungerade__ und __5__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        // 3-5
        if (randomnumber === 3 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __3__ gewählt \nIch habe __ungerade__ und __1__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
            .setDescription(`Du hast __gerade__ und __3__ gewählt \nIch habe __ungerade__ und __3__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __3__ gewählt \nIch habe __ungerade__ und __2__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __3__ gewählt \nIch habe __ungerade__ und __4__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __3__ gewählt \nIch habe __ungerade__ und __5__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        // 4-5
        if (randomnumber === 4 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __4__ gewählt \nIch habe __ungerade__ und __1__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __4__ gewählt \nIch habe __ungerade__ und __4__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __4__ gewählt \nIch habe __ungerade__ und __2__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __4__ gewählt \nIch habe __ungerade__ und __3__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __4__ gewählt \nIch habe __ungerade__ und __5__ gewählt \n\n**Summe: 9** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        // 5-5
        if (randomnumber === 5 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __5__ gewählt \nIch habe __ungerade__ und __1__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __5__ gewählt \nIch habe __ungerade__ und __5__ gewählt \n\n**Summe: 10** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __5__ gewählt \nIch habe __ungerade__ und __2__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __5__ gewählt \nIch habe __ungerade__ und __3__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __gerade__ und __5__ gewählt \nIch habe __ungerade__ und __4__ gewählt \n\n**Summe: 9** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
    } else {
        // 1-5
        if (randomnumber === 1 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __1__ gewählt \nIch habe __gerade__ und __2__ gewählt \n\n**Summe: 3** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __1__ gewählt \nIch habe __gerade__ und __1__ gewählt \n\n**Summe: 3** (ungerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __1__ gewählt \nIch habe __gerade__ und __3__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __1__ gewählt \nIch habe __gerade__ und __4__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 1 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __1__ gewählt \nIch habe __gerade__ und __5__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        // 2-5
        if (randomnumber === 2 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __2__ gewählt \nIch habe __gerade__ und __1__ gewählt \n\n**Summe: 3** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __2__ gewählt \nIch habe __gerade__ und __2__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __2__ gewählt \nIch habe __gerade__ und __3__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __2__ gewählt \nIch habe __gerade__ und __4__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 2 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __2__ gewählt \nIch habe __gerade__ und __5__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        // 3-5
        if (randomnumber === 3 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __3__ gewählt \nIch habe __gerade__ und __1__ gewählt \n\n**Summe: 4** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __3__ gewählt \nIch habe __gerade__ und __3__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __3__ gewählt \nIch habe __gerade__ und __2__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __3__ gewählt \nIch habe __gerade__ und __4__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 3 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __3__ gewählt \nIch habe __gerade__ und __5__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        // 4-5
        if (randomnumber === 4 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __4__ gewählt \nIch habe __gerade__ und __1__ gewählt \n\n**Summe: 5** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __4__ gewählt \nIch habe __gerade__ und __4__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __4__ gewählt \nIch habe __gerade__ und __2__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __4__ gewählt \nIch habe __gerade__ und __3__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 4 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __4__ gewählt \nIch habe __gerade__ und __5__ gewählt \n\n**Summe: 9** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        // 5-5
        if (randomnumber === 5 && randomnumberbetween1and5 === 1) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __5__ gewählt \nIch habe __gerade__ und __1__ gewählt \n\n**Summe: 6** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 5) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __5__ gewählt \nIch habe __gerade__ und __5__ gewählt \n\n**Summe: 10** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 2) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __5__ gewählt \nIch habe __gerade__ und __2__ gewählt \n\n**Summe: 7** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 3) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
            .setDescription(`Du hast __ungerade__ und __5__ gewählt \nIch habe __gerade__ und __3__ gewählt \n\n**Summe: 8** (gerade Zahl) \n\nDu hast verloren! Dir wurden 10 Punkte abgezogen.`);
            msg.channel.send({ embed: embed1 });
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
        if (randomnumber === 5 && randomnumberbetween1and5 === 4) {
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setColor('#DF7401')
			.setFooter(`ParNePar Minigame`)
			.setDescription(`Du hast __ungerade__ und __5__ gewählt \nIch habe __gerade__ und __4__ gewählt \n\n**Summe: 9** (ungerade Zahl) \n\nDu hast gewonnen! Dir wurden 10 Punkte hinzugefügt.`);
            msg.channel.send({ embed: embed1 });
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
    msg.reply('Du kannst dieses Minigame nur in folgendem Channel spielen: <#341324671674875905>');
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['pnp'],
	permLevel: 0
};
exports.help = {
	name: 'parnepar',
	description: 'ParNePar Minigame',
    usage: 'parnepar {UNGERADE ODER GERADE} {ZAHL ZWISCHEN 1-5}',
    example: 'parnepar gerade 2',
	category: 'fun'
};
