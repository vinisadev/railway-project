import { NextRequest, NextResponse } from 'next/server'

const messages: string[] = []

export async function GET() {
  console.log("[/messages GET]: Messages got")
  return NextResponse.json({
    messages: messages
  })
}

export async function POST(req: NextRequest) {
  console.log("[/messages POST]: Message sent")

  try {
    const { message } = await req.json()
    messages.push(message)
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