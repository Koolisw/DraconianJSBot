import axios from 'axios';
import { EmbedBuilder } from 'discord.js';

import type { TextCommand } from '../../../sturctures/command';

export const command: TextCommand = {
  data: {
    name: 'meme',
    description: "Fetch meme's image.",
    directMessageAllowed: true,
    cooldownInterval: 6 * 1000,
  },
  run: async ({ message }) => {
    const embed = new EmbedBuilder();

    try {
      const url = 'https://meme-api.herokuapp.com/gimme';

      const response = await axios.get(url);
      const responseData: {
        url: string;
        title: string;
        postLink: string;
        subreddit: string;
      } = response.data;

      embed
        .setTitle(responseData.title)
        .setImage(responseData.url)
        .setFooter({
          text: `Credit: ${responseData.subreddit} • ${responseData.postLink}`,
        });

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