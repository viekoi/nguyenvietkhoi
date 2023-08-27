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
import { GraduationCap, Home, Mail } from "lucide-react";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white", className)}>
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription className="font-normal text-black">
          Dev by day, gamer by night, hardworking, responsible, and competitive
          person.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-col gap-5">
          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <GraduationCap size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              Studied Sofware Engineering at{" "}
              <a
                className="font-semibold"
                target="_blank"
                href="https://www.ueh.edu.vn/"
              >
                University of Economics Ho Chi Minh city
              </a>
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
              <a
                className="font-semibold"
                target="_blank"
                href="mailto:khoinguyenviet1807@gmail.com"
              >
                khoinguyenviet1807@gmail.com
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
