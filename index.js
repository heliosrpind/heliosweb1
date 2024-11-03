const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;

// Your Discord Bot Token
const TOKEN = 'YOUR_DISCORD_BOT_TOKEN';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

app.get('/members-count', async (req, res) => {
    const guild = client.guilds.cache.get('YOUR_GUILD_ID');
    if (!guild) return res.status(404).send('Guild not found');

    const memberCount = guild.memberCount;
    res.json({ memberCount });
});

client.login(TOKEN);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
