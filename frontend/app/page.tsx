import ChannelsList from "@/components/channels-list";
import ChatArea from "@/components/chat-area";
import MembersList from "@/components/members-list";
import Sidebar from "@/components/sidebar";

export default function Home() {
  

  return (
    <main className="flex h-screen bg-[#36393f] text-gray-100 overflow-hidden">
      <Sidebar />
      <ChannelsList />
      <ChatArea />
      <MembersList />
    </main>
  );
}
