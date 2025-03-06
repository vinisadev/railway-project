export default function MembersList() {
  const members = [
    { id: 1, name: "JohnDoe", status: "online", role: "admin" },
    { id: 2, name: "JaneSmith", status: "online", role: "mod" },
    { id: 3, name: "AlexJohnson", status: "idle", role: "member" },
    { id: 4, name: "SamWilson", status: "dnd", role: "member" },
    { id: 5, name: "EmilyDavis", status: "offline", role: "member" },
    { id: 6, name: "MichaelBrown", status: "online", role: "member" },
    { id: 7, name: "SophiaMiller", status: "online", role: "member" },
    { id: 8, name: "DavidWilliams", status: "idle", role: "member" },
  ]
  
  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  }
  
  const roleGroups = {
    admin: "ADMIN — 1",
    mod: "MODERATORS — 1",
    member: "ONLINE — 6",
  }
  
  // Add interface for member object
  interface Member {
    id: number;
    name: string;
    status: string;
    role: string;
  }
  
  // Add interface for grouped members
  interface GroupedMembers {
    [role: string]: Member[];
  }
  
  // Group members by role with proper typing
  const groupedMembers = members.reduce((acc: GroupedMembers, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {} as GroupedMembers);
  
  return (
    <div className="w-60 bg-[#2f3136] hidden md:block">
      <div className="p-4">
        <div className="text-xs text-gray-400 font-semibold mb-2">
          ONLINE — {members.filter((m) => m.status !== "offline").length}
        </div>
        {Object.entries(groupedMembers).map(([role, roleMembers]) => (
          <div key={role}>
            <div className="text-xs text-gray-400 font-semibold mt-4 mb-2">{roleGroups[role as keyof typeof roleGroups]}</div>
            {roleMembers.map((member) => (
              <div key={member.id} className="flex items-center py-1 px-2 rounded hover:bg-[#42464d] cursor-pointer">
                <div className="relative mr-2">
                  <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center">
                    {member.name.charAt(0)}
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#2f3136] ${
                      statusColors[member.status as keyof typeof statusColors]
                    }`}
                  ></div>
                </div>
                <span className="text-sm text-gray-300">{member.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}