import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BadgeProps extends LucideProps {
  iconName?: keyof typeof dynamicIconImports;
  url: string;
  backgroundColor?: string;
  imageUrl?: string;
  className?: string;
}

const Badge = ({
  iconName,
  url,
  backgroundColor,
  imageUrl,
  className,
  ...props
}: BadgeProps) => {
  if (iconName) {
    var LucideIcon = dynamic(dynamicIconImports[iconName]);
    return (
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          " flex items-center justify-center w-[24px] h-[24px] rounded-[50%] shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300"
        )}
        style={{
          backgroundColor: `${
            backgroundColor ? backgroundColor : `transparent`
          }`,
        }}
      >
        <div className="">
          <LucideIcon size={16} color="white" />
        </div>
      </Link>
    );
  } else if (imageUrl) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "rounded-[50%] shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 relative ",
          className
        )}
        style={{
          backgroundColor: `${
            backgroundColor ? backgroundColor : `transparent`
          }`,
        }}
      >
        <Image
          src={imageUrl}
          alt={imageUrl}
          style={{ objectFit: "contain" }}
          fill
          className="absolute"
        />
      </Link>
    );
  }
};

export default Badge;
