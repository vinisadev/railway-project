import { ChevronDown, Hash, Headphones, Mic, Settings, User } from "lucide-react"

export default function ChannelsList() {
  const categories = [
    {
      id: 1,
      name: "TEXT CHANNELS",
      channels: [
        { id: 1, name: "chit-chat", type: "text", unread: true },
        { id: 2, name: "help", type: "text" }
      ]
    },
    {
      id: 2,
      name: "VOICE CHANNELS",
      channels: [
        { id: 3, name: "Polar Express", type: "voice" },
        { id: 4, name: "Trans-Siberian", type: "voice" }
      ]
    }
  ]
  
  return (
    <div className="w-60 bg-[#2f3136] flex flex-col">
      <div className="h-12 border-b border-[#202225] shadow-sm flex items-center px-4 font-semibold">Server Name</div>
      <div className="flex-1 overflow-y-auto px-2 py-4">
        {categories.map((category) => (
          <div key={category.id} className="mb-4">
            <div className="flex items-center text-xs text-gray-400 font-semibold mb-1 px-1 hover:text-gray-300 cursor-pointer">
              <ChevronDown size={12} className="mr-1" />
              {category.name}
            </div>
            {category.channels.map((channel) => (
              <div
                key={channel.id}
                className={`flex items-center px-2 py-1 rounded hover:bg-[#42464d] cursor-pointer mb-1 ${channel.id === 1 ? "bg-[#42464d] text-white" : "text-gray-400"}`}
              >
                {channel.type === "text" ? (
                  <Hash size={18} className="mr-1 text-gray-400" />
                ) : (
                  <Headphones size={18} className="mr-1 text-gray-400" />
                )}
                <span className="text-sm">{channel.name}</span>
                {channel.unread && <div className="w-2 h-2 bg-white rounded-full ml-auto"></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="h-14 bg-[#292b2f] px-2 flex items-center">
        <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center mr-2">
          <User size={16} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">Username</div>
          <div className="text-xs text-gray-400">#1234</div>
        </div>
        <div className="flex gap-2 text-gray-400">
          <Mic size={18} className="hover:text-gray-200 cursor-pointer" />
          <Headphones size={18} className="hover:text-gray-200 cursor-pointer" />
          <Settings size={18} className="hover:text-gray-200 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}