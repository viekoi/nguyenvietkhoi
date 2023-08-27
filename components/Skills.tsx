"use client";

import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import ReactNative from "../public/assets/skills/react-native.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Ts from "../public/assets/skills/typescript.png";
import NextJS from "../public/assets/skills/nextjs.png";
import MongoDB from "../public/assets/skills/mongo.png";
import Prisma from "../public/assets/skills/prisma.png";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface SKillsProps {
  className?: string;
}

const skills = [
  { skill: "HTML", imageUrl: Html },
  { skill: "CSS", imageUrl: Css },
  { skill: "JavaScript", imageUrl: Javascript },
  { skill: "TypeScript", imageUrl: Ts },
  { skill: "React", imageUrl: ReactImg },
  { skill: "React Native", imageUrl: ReactNative },
  { skill: "Next", imageUrl: NextJS },
  { skill: "Tailwind", imageUrl: Tailwind },
  { skill: "GitHub", imageUrl: Github },
  { skill: "MongoDB", imageUrl: MongoDB },
  { skill: "Prisma", imageUrl: Prisma },
];

const Skills: React.FC<SKillsProps> = ({ className }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-skill grid- gap-4">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="">
                  <Image
                    className="rounded-sm col-span-1 border-solid"
                    src={skill.imageUrl}
                    alt={skill.skill}
                    height={80}
                    width={80}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
