import Image from "next/image";
import { cn } from "@/lib/utils";

type BadgeProps = {
  text?: string;
  icon?: string;
  variant?: "default" | "dark";
};

export default function Badge({
  text = "Powered by nature",
  icon = "/badge.svg",
  variant = "default",
}: BadgeProps) {
  return (
    <div
      className={cn(
        "w-fit rounded-full p-1",
        variant === "dark" ? "bg-background/15" : "bg-foreground/2",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full py-1.5 pr-4 pl-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]",
          variant === "dark" ? "bg-background/10" : "bg-background",
        )}
      >
        <Image src={icon} alt="" width={16} height={16} />
        <span
          className={cn(
            "text-center text-sm leading-none md:text-base",
            variant === "dark" ? "text-background" : "text-foreground",
          )}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
