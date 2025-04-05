import { cn } from "@/lib/utils";

interface LogoProps {
  size?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "text-2xl", color = "text-white" }) => {
  return (
    <div className={cn("font-extrabold tracking-wide flex items-center gap-3", size, color)}>
      <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg shadow-lg">
        AI
      </span>
      <span className="text-slate-300 drop-shadow-md">GM</span>
    </div>
  );
};

export default Logo;
