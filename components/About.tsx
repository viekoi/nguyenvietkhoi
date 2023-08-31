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
import { GraduationCap, Home, Mail} from "lucide-react";
import Link from "next/link";
import IconBadge from "./ui/IconBadge";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription className=" text-blue-600 font-bold ">
          Dev by day, gamer by night, hardworking, responsible, and competitive
          person.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-col gap-4 opacity-[80%]">
          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <GraduationCap size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              Studied Sofware Engineering at{" "}
              <Link
                className="font-semibold underline"
                target="_blank"
                href="https://www.ueh.edu.vn/"
              >
                University of Economics Ho Chi Minh city
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <Home size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              Ho Chi Minh, Viet Nam
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <Mail size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              <Link
                className="font-semibold underline"
                target="_blank"
                href="mailto:khoinguyenviet1807@gmail.com"
              >
                khoinguyenviet1807@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full justify-end">
          <IconBadge
            backgroundColor="#4267B2"
            url="https://www.facebook.com/profile.php?id=100009650203975"
            iconName="facebook"
          />
          <IconBadge
            backgroundColor="#000"
            url="https://github.com/viekoi"
            iconName="github"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default About;
