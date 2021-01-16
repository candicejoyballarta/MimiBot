const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
	console.log('mimiYuuuh is now online');
});

client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('hello, world!');
	} else if (command === 'water') {
		message.channel.send('drink your water!');
	}
});

client.login('Nzk5Nzc3OTc5MDg4NTAyODIy.YAIhSQ.GOWUBvm-BcOENgQAj9vrdiZo8_k');
