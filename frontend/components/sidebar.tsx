import { Plus, Settings } from "lucide-react"

export default function Sidebar() {
  const servers = [
    { id: 1, name: "Railway", initial: "R"}
  ]

  return (
    <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 gap-3">
      {servers.map((server) => (
        <div
          key={server.id}
          className={`w-12 h-12 rounded-full bg-[#36393f] flex items-center justify-center cursor-pointer hover:rounded-2xl transition-all duration-200 ${server.id === 1 ? "bg-[#5865f2]" : ""}`}
        >
          <span className="text-white font-semibold">{server.initial}</span>
        </div>
      ))}
      <div className="w-12 h-12 rounded-full bg-[#36393f] flex items-center justify-center cursor-pointer hover:rounded-2xl transition-all duration-200 text-[#3ba55d]">
        <Plus size={24} />
      </div>
      <div className="w-12 h-12 rounded-full bg-[#36393f] flex items-center justify-center cursor-pointer hover:rounded-2xl transition-all duration-200 text-[#3ba55d] mt-auto">
        <Settings size={20} />
      </div>
    </div>
  )
}