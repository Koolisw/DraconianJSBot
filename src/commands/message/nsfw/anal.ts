import axios from 'axios';
import { EmbedBuilder } from 'discord.js';

import type { TextChannel } from 'discord.js';
import type { TextCommand } from '../../../sturctures/command';

export const command: TextCommand = {
  data: {
    name: 'anal',
    description: 'NSFW command, with NO information.',
    nsfwChannelRequired: true,
  },
  run: async ({ message }) => {
    if (!(message.channel as TextChannel).nsfw) return;

    const embed = new EmbedBuilder();

    try {
      const url = 'https://nekobot.xyz/api/image';

      const response = await axios.get(url, { params: { type: 'anal' } });
      const responseData = response.data;

      const data: {
        message: string;
        success: boolean;
      } = responseData[0];

      embed.setTitle('Anal here').setImage(data.message);

      message.reply({
        embeds: [embed],
      });
    } catch {
      embed.setDescription('Error occured when fetching meme content.');

      message.reply({
        embeds: [embed],
      });
    }
  },
};