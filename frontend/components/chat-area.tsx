"use client"
import { AtSign, Gift, PlusCircle, Smile, Paperclip } from "lucide-react"
import { Input } from "@/components/ui/input"
import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

interface Message {
  id: number
  user: string
  avatar: string
  time: string
  content: string
}

interface MessageResponse {
  message: Message
}

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([])
  const [debug, setDebug] = useState<string>("")

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages')
        console.log("API Response: ", response.data)
        
        if (Array.isArray(response.data.messages)) {
          console.log("Parsing messages array...");
          // Extract the actual message objects from the nested structure
          const extractedMessages = response.data.messages.map(
            (item: MessageResponse) => {
              console.log("Item being processed:", item);
              console.log("Message from item:", item.message);
              return item.message;
            }
          )
          console.log("Extracted messages:", extractedMessages);
          setDebug(JSON.stringify(extractedMessages, null, 2));
          setMessages(extractedMessages);
        } else {
          console.error("Received messages data is not an array: ", response.data.messages)
          setDebug("Error: messages is not an array");
        }
      } catch (error) {
        console.error("Error fetching messages: ", error)
        setDebug(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    
    fetchMessages()
    const interval = setInterval(fetchMessages, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-1 flex flex-col">
      <div className="h-12 border-b border-[#202225] shadow-sm flex items-center px-4">
        <div className="flex items-center text-gray-200 font-semibold">
          <span className="text-gray-400 mr-2">
            <AtSign size={20} />
          </span>
          chit-chat
        </div>
      </div>
      
      {/* Debug info */}
      {debug && (
        <div className="p-2 bg-red-800 text-white text-xs">
          <pre>{debug}</pre>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center py-4">No messages to display</div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className="mb-4 flex">
            <img
              src={message.avatar || "/placeholder.jpg"}
              alt={message.user}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{message.user}</span>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
              <div className="text-gray-100">{message.content}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4">
        <div className="bg-[#40444b] rounded-lg p-2 flex items-center">
          <button className="text-gray-400 hover:text-gray-200 p-2">
            <PlusCircle size={20} />
          </button>
          <Input
            placeholder="Message #chit-chat"
            className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-200"
          />
          <button className="text-gray-400 hover:text-gray-200 p-2">
            <Gift size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-200 p-2">
            <Paperclip size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-200 p-2">
            <Smile size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}