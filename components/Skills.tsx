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
import Sql from "../public/assets/skills/sql.png";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SKillsProps {
  className?: string;
}

const skills = [
  {
    skill: "HTML",
    imageUrl: Html,
    url: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
  },
  {
    skill: "CSS",
    imageUrl: Css,
    url: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
  },
  {
    skill: "JavaScript",
    imageUrl: Javascript,
    url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
  },
  {
    skill: "TypeScript",
    imageUrl: Ts,
    url: `https://www.typescriptlang.org/docs/`,
  },
  { skill: "React", imageUrl: ReactImg, url: `https://react.dev/` },
  {
    skill: "React Native",
    imageUrl: ReactNative,
    url: `https://reactnative.dev/`,
  },
  { skill: "Next", imageUrl: NextJS, url: `https://nextjs.org/` },
  { skill: "Tailwind", imageUrl: Tailwind, url: "https://tailwindcss.com/" },
  { skill: "GitHub", imageUrl: Github, url: `https://github.com/` },
  { skill: "MongoDB", imageUrl: MongoDB, url: `https://mongodb.com/` },
  { skill: "SQL", imageUrl: Sql, url: `https://dev.mysql.com/doc/` },

  { skill: "Prisma", imageUrl: Prisma, url: `https://www.prisma.io/` },
];

const Catagorized = [
  {
    title: "Coding Languages",
    des: "JavaScript, Typescript",
  },
  {
    title: "Frameworks ",
    des: "ReactJs, NextJs",
  },
  {
    title: "Styling",
    des: "CSS, SASS, TAILWIND",
  },
  {
    title: "State Management",
    des: "Redux, Zustand, React Context Api",
  },
  {
    title: "Auth",
    des: "Next Auth, oAuth, Clerk, SupaBase",
  },
  {
    title: "Database Languages",
    des: "NoSql, Sql",
  },
  {
    title: "Ui Frameworks",
    des: "Radix, Shadcn, Bootstrap",
  },
  {
    title: "Version Control",
    des: "Git",
  },
];

const Skills: React.FC<SKillsProps> = ({ className }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-skill  gap-10">
            {skills.map((skill, index) => {
              return (
                <Link href={skill.url} key={index} target="_blank">
                  <HoverCard openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Image
                        className="rounded-sm col-span-1 border-solid cursor-pointer hover:opacity-[80%]"
                        src={skill.imageUrl}
                        alt={skill.skill}
                        height={50}
                        width={50}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit px-2 py-1">
                      <h4 className="text-sm font-semibold dark:text-white text-[12px]">
                        @{skill.skill}
                      </h4>
                    </HoverCardContent>
                  </HoverCard>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4 mt-10">
          {Catagorized.map((category, index) => {
            return (
              <div className="" key={index}>
                <h4 className=" text-[14px] font-bold">{category.title}</h4>
                <span className=" text-[12px] font-normal">{category.des}</span>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Skills;
