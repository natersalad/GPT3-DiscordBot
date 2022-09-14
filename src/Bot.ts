import {Client} from "discord.js"
import ready from "./listeners/ready"
const { token } = require("./config.json");

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token)
