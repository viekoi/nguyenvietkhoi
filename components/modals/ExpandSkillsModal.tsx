"use client";

import React from "react";
import Modal from "./Modal";
import useExpandSkills from "@/hooks/useExpandSkills";
import Badge from "../ui/Badge";
import { TImageUrlVariants } from "../ui/Badge";

type TExtandSkill = {
  title: string;
  skills: ({ name: string } & TImageUrlVariants)[];
};

const extandSkills: TExtandSkill[] = [
  {
    title: "Coding Languages",
    skills: [
      {
        name: "TypeScript",
        variant: "ts",
      },
      {
        name: "JavaScript",
        variant: "js",
      },
    ],
  },
  {
    title: "Frameworks ",
    skills: [
      { name: "Next", variant: "next" },
      { name: "React", variant: "react" },
    ],
  },
  {
    title: "Styling",
    skills: [
      {
        name: "CSS",
        variant: "css",
      },
      {
        name: "Tailwind",
        variant: "tailwind",
      },
      {
        name: "Sass",
        variant: "sass",
      },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", variant: "redux" },
      {
        name: "Zustand",
        variant: "zustand",
      },
      {
        name: "React context api",
        variant: "react",
      },
      {
        name: "Tansatack",
        variant: "tanstack",
      },
    ],
  },
  {
    title: "Auth",
    skills: [
      { name: "Clerk", variant: "clerk" },
      { name: "SupaBase", variant: "supa" },
      {
        name: "Next Auth",
        variant: "nextauth",
      },
    ],
  },
  {
    title: "Database Languages",
    skills: [
      { name: "SQL", variant: "sql" },
      {
        name: "NoSql",
        variant: "nosql",
      },
    ],
  },
  {
    title: "Database ORM",
    skills: [
      { name: "Prisma", variant: "prisma" },
      {
        name: "Drizzle",
        variant: "drizzle",
      },
    ],
  },
  {
    title: "Ui Frameworks",
    skills: [
      { name: "Radix", variant: "radix" },
      { name: "Shadcn", variant: "shadcn" },
      {
        name: "Bootstrap",
        variant: "bootstrap",
      },
    ],
  },
  {
    title: "Version control",
    skills: [{ name: "Git", variant: "git" }],
  },
];

const ExpandSkillsModal = () => {
  const expandSkills = useExpandSkills();

  return (
    <Modal isOpen={expandSkills.isOpen} onClose={expandSkills.onClose}>
      <div className="flex flex-col gap-4">
        {extandSkills.map((extandSkill, index) => {
          return (
            <div className="" key={index}>
              <h4 className=" text-[14px] font-bold">{extandSkill.title}</h4>
              <div className="flex gap-2">
                {extandSkill.skills.map((skill, index) => {
                  return (
                    <Badge
                      key={index}
                      variant={skill.variant}
                      className="w-[30px] h-[30px] "
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default ExpandSkillsModal;
