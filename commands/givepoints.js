const sql = require("sqlite");
sql.open("../score.sqlite");
exports.run = (client, msg, args) => {
	const user = msg.mentions.users.first();
	const amountofcoins = parseInt(args.slice(1).join(' '));
	if (!user) return msg.reply('Du musst einen User angeben, welchem du Coins geben willst.');
	if (!amountofcoins) return msg.reply('Du musst die Anzahl an Coins angeben.');
	if (msg.author.id !== '238590234135101440') return msg.reply('Du hast nicht die benötigten Rechte um diesen Befehl auszuführen.');
	sql.get(`SELECT * FROM scores WHERE userId ="${user.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [user.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + amountofcoins));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + amountofcoins}, level = ${row.level} WHERE userId = ${user.id}`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + amountofcoins} WHERE userId = ${user.id}`);
		}
		msg.reply("Punke wurden erfolgreich vergeben!").then(m => m.delete({ timeout: 10000 }));
	  }).catch((error) => {
		console.error(error);
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [user.id, 1, 0]);
		});
	});
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['gp'],
	permLevel: 4
};
exports.help = {
	name: 'givepoints',
	description: 'Gibt einem User Punkte',
	usage: 'givepoints @USER {ANZAHL}',
	example: 'givepoints @Monkeyyy11 2000',
	category: 'botowner'
};
