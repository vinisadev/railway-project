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
  if (message.webhookId) {
    await handleWebhookMessage(message.content)
  } else {
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
  }
})

async function handleWebhookMessage(content: string) {
  const messageData = {
    message: {
      id: Date.now(),
      user: 'Webhook Bot',
      avatar: `${process.env.BACKEND_URL}/bot-picture.avif`,
      time: `Today at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
      content: content
    }
  }

  try {
    await axios.post(`${process.env.BACKEND_URL}/api/messages`, messageData)
  } catch (error) {
    console.error('Error sending webhook message to NextJS ap: ', error)
  }
}

client.login(process.env.DISCORD_TOKEN)