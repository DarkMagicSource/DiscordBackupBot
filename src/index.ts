// import discord.js classes
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// setup discord client
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

// main function when bot is ready
client.once("ready", () => {
  console.log("Ready!");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const guildId = process.env.GUILDID!;
  const guild = client.guilds.cache.get(guildId);
  let commands;

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create({
    name: "ping",
    description: "replys with pong,"
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    interaction.reply({
      content: "Pong",
      ephemeral: true
    });
  }
});

// login using token from .env
client.login(process.env.TOKEN);