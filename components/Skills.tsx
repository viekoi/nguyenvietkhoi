"use client";

import Css from "../public/assets/skills/css.png";
import Github from "../public/assets/skills/github1.png";
import Html from "../public/assets/skills/html.png";
import Javascript from "../public/assets/skills/javascript.png";
import MongoDB from "../public/assets/skills/mongo.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Prisma from "../public/assets/skills/prisma.png";
import ReactNative from "../public/assets/skills/react-native.png";
import ReactImg from "../public/assets/skills/react.png";
import Sql from "../public/assets/skills/sql.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Ts from "../public/assets/skills/typescript.png";
import Aws from "../public/assets/skills/aws.png"
import Gcp from "../public/assets/skills/gcp.png"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useExpandSkills from "@/hooks/useExpandSkills";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FullSizeBtn from "./ui/FullSizeBtn";

interface SKillsProps {
  className?: string;
}

const skills = [
  {
    skill: "AWS",
    imageUrl:Aws,
    url:"https://aws.amazon.com"
  },
  {
    skill: "GCP",
    imageUrl:Gcp,
    url:"https://cloud.google.com"
  },
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

const Skills: React.FC<SKillsProps> = ({ className }) => {
  const expandSkillsModal = useExpandSkills();

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
                <HoverCard openDelay={100} closeDelay={100} key={index}>
                  <HoverCardTrigger asChild>
                    <Link href={skill.url}  target="_blank">
                      <Image
                        className="rounded-sm col-span-1 border-solid cursor-pointer hover:opacity-[80%]"
                        src={skill.imageUrl}
                        alt={skill.skill}
                        height={50}
                        width={50}
                      />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit px-2 py-1">
                    <h4 className="text-sm font-semibold dark:text-white text-[12px]">
                      @{skill.skill}
                    </h4>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <FullSizeBtn onClick={expandSkillsModal.onOpen}>More</FullSizeBtn>
      </CardFooter>
    </Card>
  );
};

export default Skills;
