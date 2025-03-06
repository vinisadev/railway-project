import { NextRequest, NextResponse } from 'next/server'
import { getIo } from "@/lib/socket"

type Message = {
  id: number,
  user: string,
  avatar: string,
  time: string,
  content: string
}

const messages: Message[] = []

export async function GET() {
  return NextResponse.json({
    messages: messages
  })
}

export async function POST(req: NextRequest) {

  try {
    const messageData: Message = await req.json()
    messages.push(messageData)
    console.log("Message added: ", messageData)

    const io = getIo()
    io.emit('newMessage', messageData)

    return NextResponse.json({
      success: true,
      status: 200
    })
  } catch (error) {
    console.error("Error parsing JSON body: ", error)
    return NextResponse.json({
      success: false,
      status: 400,
      message: "Invalid JSON body"
    })
  }
}