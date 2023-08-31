"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Avatar from "./Avatar";
import Image from "next/image";
import Link from "next/link";
import { Code, FileText, Airplay } from "lucide-react";

interface ProjectCardProps {
  className?: string;
  projectUrl: string;
  demoUrl: string;
  duration: string;
  imageUrl: string;
  title:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  projectUrl,
  demoUrl,
  duration,
  imageUrl,
  title,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "bg-white border-[1px] border-solid border-[#d2d3d5] ",
        className
      )}
    >
      <CardContent className=" p-[16px_0_8px_16px]">
        <div className="flex items-start gap-x-2">
          <Avatar className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <h4 className="font-semibold">Nguyễn Việt Khôi</h4>
            <h4 className=" items-center flex gap-x-1 text-[12px] font-light">
              {duration} <Globe size={12} opacity={0.6} />{" "}
            </h4>
          </div>
        </div>
      </CardContent>

      <CardContent className="p-0 overflow-hidden">
        <Link href={demoUrl} target="_blank">
          <div
            className="pt-[50%] relative  border-t-[2px] border-solid border-[#D1D5DB]"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          ></div>
          <CardDescription className="p-4 bg-[#D1D5DB] font-semibold text-black">
            {title.toUpperCase()}
          </CardDescription>
        </Link>
      </CardContent>
      <CardContent className=" p-0   border-t-[1px] border-solid border-[#D1D5DB]">
        <div className=" grid grid-cols-3 gap-1 p-1">
          <Link
            target="_blank"
            href={projectUrl}
            className="opacity-[60%] rounded-sm py-1 px-2  w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]"
          >
            <Code size={16} />
            <span className="text-[16px]">source</span>
          </Link>
          <button className="opacity-[60%] rounded-sm py-1 px-2  w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]">
            <FileText size={16} />
            <span className="text-[16px]">details</span>
          </button>
          <Link
            target="_blank"
            href={demoUrl}
            className="opacity-[60%] rounded-sm py-1 px-2 w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]"
          >
            <Airplay size={16} />
            <span className="text-[16px]">demo</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
