import { Client, GatewayIntentBits } from 'discord.js'
import axios from 'axios'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.on('messageCreate', async message => {
  if (message.author.bot) return
  console.log(`New message: ${message.content}`)

  try {
    await axios.post(process.env.BACKEND_URL + '/api/messages', {
      messages: message.content
    })
  } catch (error) {
    console.error('Error sending messages to NextJS app: ', error)
  }
})

client.login(process.env.DISCORD_TOKEN)