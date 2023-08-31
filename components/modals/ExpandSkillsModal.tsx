"use client";

import React from "react";
import Modal from "./Modal";
import useExpandSkills from "@/hooks/useExpandSkills";
import Badge from "../ui/Badge";
import { imageUrlVariants } from "../ui/Badge";

type extandSkill = {
  title: string;
  skills: ({ name: string; url: string } & imageUrlVariants)[];
};

const extandSkills: extandSkill[] = [
  {
    title: "Coding Languages",
    skills: [
      {
        name: "TypeScript",
        imageUrl: "ts",
        url: `https://www.typescriptlang.org/docs/`,
      },
      {
        name: "JavaScript",
        imageUrl: "js",
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
      },
    ],
  },
  {
    title: "Frameworks ",
    skills: [
      { name: "Next", imageUrl: "next", url: `https://nextjs.org/` },
      { name: "React", imageUrl: "react", url: `https://react.dev/` },
    ],
  },
  {
    title: "Styling",
    skills: [
      {
        name: "CSS",
        imageUrl: "css",
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
      },
      {
        name: "Tailwind",
        imageUrl: "tailwind",
        url: "https://tailwindcss.com/",
      },
      {
        name: "Sass",
        imageUrl: "sass",
        url: "https://sass-lang.com/documentation/",
      },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", imageUrl: "redux", url: "https://redux.js.org/" },
      {
        name: "Zustand",
        imageUrl: "zustand",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        name: "React context api",
        imageUrl: "react",
        url: "https://legacy.reactjs.org/docs/context.html",
      },
    ],
  },
  {
    title: "Auth",
    skills: [
      { name: "Clerk", imageUrl: "clerk", url: "https://clerk.com/" },
      { name: "SupaBase", imageUrl: "supa", url: "https://supabase.com/" },
      {
        name: "Next Auth",
        imageUrl: "nextauth",
        url: "https://next-auth.js.org/",
      },
    ],
  },
  {
    title: "Database Languages",
    skills: [
      { name: "SQL", imageUrl: "sql", url: "https://dev.mysql.com/doc/" },
      {
        name: "NoSql",
        imageUrl: "nosql",
        url: "https://www.mongodb.com/document-databases",
      },
    ],
  },
  {
    title: "Ui Frameworks",
    skills: [
      { name: "Radix", imageUrl: "radix", url: "https://www.radix-ui.com/" },
      { name: "Shadcn", imageUrl: "shadcn", url: "https://ui.shadcn.com/" },
      {
        name: "Bootstrap",
        imageUrl: "bootstrap",
        url: "https://getbootstrap.com/",
      },
    ],
  },
  {
    title: "Version control",
    skills: [{ name: "Git", imageUrl: "git", url: "https://git-scm.com/" }],
  },
  
];

const ExpandSkillsModal = () => {
  const expandSkills = useExpandSkills();

  return (
    <Modal isOpen={expandSkills.isOpen} onClose={expandSkills.onClose}>
      <div className="flex flex-col gap-4 mt-10">
        {extandSkills.map((extandSkill, index) => {
          return (
            <div className="" key={index}>
              <h4 className=" text-[14px] font-bold">{extandSkill.title}</h4>
              <div className="flex gap-2">
                {extandSkill.skills.map((skill, index) => {
                  return (
                    <Badge
                      key={index}
                      imageUrl={skill.imageUrl}
                      url={skill.url}
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
