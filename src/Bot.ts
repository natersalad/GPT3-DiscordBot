import {Client} from "discord.js"
import ready from "./listeners/ready"

const token = "MTAxOTU5NDEzNDYxNDQ1MDE4Ng.GU9Wcc.XrQ4RhfKK8P-zLfGohwSTGMNVReuBTQVKZdCag";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token)
