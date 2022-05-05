const MessageCommand = require('../../../Structures/Command');
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require('discord-api-types/v10');
const { Colors } = require('../../../Utils/Constants');
const { fetch } = require('undici');

module.exports = class extends MessageCommand {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'This command contain explicit content!',
			category: 'NSFW',
			cooldown: 10000,
			nsfw: true
		});
	}

	async run(message) {
		const body = await fetch('http://api.obutts.ru/butts/0/1/random');
		const response = await body.json();

		const button = new ActionRowBuilder()
			.addComponents([new ButtonBuilder()
				.setStyle(ButtonStyle.Link)
				.setLabel('Open in Browser')
				.setURL(`http://media.obutts.ru/${response[0].preview}`)]);

		const embed = new EmbedBuilder()
			.setColor(Colors.Default)
			.setImage(`http://media.obutts.ru/${response[0].preview}`)
			.setFooter({ text: `Powered by ${this.client.user.username}`, iconURL: message.author.avatarURL() });

		return message.reply({ embeds: [embed], components: [button] });
	}

};
