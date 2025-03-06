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
    const formattedMessage = {
      message: {
        id: Date.now(),
        user: message.author.username,
        avatar: message.author.displayAvatarURL() || "/placeholder.jpg",
        time: `Today at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
        content: message.content
      }
    }

    console.log(formattedMessage)

    await axios.post(`${process.env.BACKEND_URL}/api/messages`, formattedMessage)
  } catch (error) {
    console.error('Error sending messages to NextJS app: ', error)
  }
})

client.login(process.env.DISCORD_TOKEN)