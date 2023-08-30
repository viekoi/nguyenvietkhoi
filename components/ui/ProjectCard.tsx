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

interface ProjectCardProps {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-lg border-[1px] border-solid border-[#D1D5DB]", className)}>
      <CardContent className=" p-[16px_0_8px_16px]">
        <div className="flex items-start gap-x-2">
          <Avatar className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <h4 className="font-semibold">Nguyễn Việt Khôi</h4>
            <h4 className=" items-center flex gap-x-1 text-[12px] font-light">
              june 2023 - july 2023 <Globe size={12} opacity={0.6} />{" "}
            </h4>
          </div>
        </div>
      </CardContent>

      <CardContent className="p-0">
        <Link href={`https://music-share-nu.vercel.app/`} target="_blank" >
          <div className=" w-full h-[150px] relative">
            <Image
              src={`/assets/projects/MusicShare.png`}
              style={{ objectFit: "cover" }}
              className="absolute"
              fill
              alt="project"
            />
          </div>
          <CardDescription className="p-4 bg-[#f0f2f5] font-semibold text-black">
            Music Share
          </CardDescription>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
