// components/UserRow.tsx
import Image from "next/image";

interface UserRowProps {
  avatar: string;
  ethIcon: string;
  verified?: boolean;
  username: string;
  smallValue: string;
  bigValue: string;
  percentage: string;
  index?: number;
}
export default function UserRow({
  avatar,
  ethIcon,
  username,
  smallValue,
  bigValue,
  percentage,
  index,
}: UserRowProps) {
  const percent = parseFloat(percentage);
  const isPositive = percent > 0;
  const color = isPositive
    ? "text-[#14C8B0]"
    : percent < 0
    ? "text-[#FF002E]"
    : "text-gray-500";

  return (
    <div
      className="flex items-center justify-between border-b border-gray-700"
      style={{ padding: "10px 0" }}
    >
      <div className="flex items-center space-x-4">
        {/* Numbering */}

        <div className="relative">
          <Image
            src={avatar}
            alt={username}
            width={48}
            height={48}
            className="rounded-full border border-gray-600"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-black font-medium">{username}</div>
         
        <div className="flex flex-row items-center space-x-2">
          <Image
            src={ethIcon}
            alt="ETH Icon"
            width={8}
            height={8}
          />
           <div className="text-[#AEAEB2] text-sm">
            {smallValue} 
          </div>
          </div>
        </div>
      </div>

      <div className={`text-right font-semibold w-20 ${color}`}>
        {percentage}
      </div>
    </div>
  );
}
