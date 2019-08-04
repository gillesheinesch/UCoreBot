const got = require('got');
const Discord = require('discord.js');

const makeURL = (city) => `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(city)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
const celsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

const spacer = {
    name: '\u200b',
    value: '\u200b',
};

exports.run = async (client, msg, args) => {
    if (args.length < 1) {
        msg.channel.send('Bitte gib einen Ort oder eine Stadt an');
    }

    const city = args.join(' ');
    const res = await got(makeURL(city), { json: true });

    if (!res || !res.body || !res.body.query || !res.body.query.results || !res.body.query.results.channel) {
        msg.channel.send('Ein Fehler ist augetreten. Konnte das Wetter nicht laden!');
    }

    const weatherInfo = res.body.query.results.channel;
    const forecast = weatherInfo.item.forecast[0];

    const description = `Die aktuelle Temperatur ${weatherInfo.location.city} ist ${weatherInfo.item.condition.temp}°F/${celsius(weatherInfo.item.condition.temp)}°C`;
    const embed = new Discord.MessageEmbed()
    .addField('🏖 Wetter', weatherInfo.item.condition.text)
    .addField('💦Feuchtigkeit', weatherInfo.atmosphere.humidity + '%')
    .addField(':wind_blowing_face: Wind', `*${weatherInfo.wind.speed}mph* ; Richtung: *${weatherInfo.wind.direction}°*`)
    .addField(`🔔 Vorhersage für heute ist: *${forecast.text}*`, `Die höchste Temperatur beträgt ${forecast.high}°F/${celsius(forecast.high)}°C, die niedrigste Temperatur ${forecast.low}°F/${celsius(forecast.low)}°C`)
    .addField(`:sunrise: Sonnenaufgang`, weatherInfo.astronomy.sunrise)
    .addField(`:city_sunset: Sonnenuntergang`, weatherInfo.astronomy.sunset)
    .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
    .setFooter('© UcoreBot')
	.setColor('#0066CC');

    msg.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
	name: 'weather',
	description: 'Wetter eines Standorts',
    usage: 'weather {STANDORT}',
    example: 'weather Trier',
	category: 'utility'
};
