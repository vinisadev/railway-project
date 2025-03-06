import { AtSign, Gift, PlusCircle, Smile, Paperclip } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ChatArea() {
  const messages = [
    {
      id: 1,
      user: "JohnDoe",
      avatar: "/placeholder.jpg",
      time: "Today at 12:30 PM",
      content: "Hey everyone! How's it going?",
    },
    {
      id: 2,
      user: "JaneSmith",
      avatar: "/placeholder.jpg",
      time: "Today at 12:32 PM",
      content: "Pretty good! Working on a new project.",
    },
    {
      id: 3,
      user: "AlexJohnson",
      avatar: "/placeholder.jpg",
      time: "Today at 12:35 PM",
      content: "Nice! What kind of project?",
    },
    {
      id: 4,
      user: "JaneSmith",
      avatar: "/placeholder.jpg",
      time: "Today at 12:37 PM",
      content: "It's a chat application that looks like Discord 😉",
    },
    {
      id: 5,
      user: "SamWilson",
      avatar: "/placeholder.jpg",
      time: "Today at 12:40 PM",
      content: "That sounds awesome! Can't wait to see it.",
    },
  ]

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
      <div className="flex-1 overflow-y-auto p-4">
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