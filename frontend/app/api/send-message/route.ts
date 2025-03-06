import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || ''

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json()

    await axios.post(WEBHOOK_URL!, {
      content: content
    })

    return NextResponse.json({
      success: true,
      status: 200
    })
  } catch (error) {
    console.error("Error sending message to Discord: ", error)
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Error sending message"
    })
  }
}