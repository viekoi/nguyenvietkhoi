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
import ProjectCard from "./ui/ProjectCard";
import { imageUrlVariants } from "./ui/Badge";
import { ValueOf } from "next/dist/shared/lib/constants";

type Project = {
  title: string;
  imageUrl: string;
  demoUrl: string;
  projectUrl: string;
  duration: string;
  type: string;
  descipttion: string;
  stacks: {
    frontend: imageUrlVariants[`variant`][];
    backend: imageUrlVariants[`variant`][];
    database: imageUrlVariants[`variant`][];
  };
};

const projects: Project[] = [
  {
    title: "Postastic",
    imageUrl: "/assets/projects/postastic.png",
    demoUrl: "https://postastic.vercel.app/",
    projectUrl: "https://github.com/viekoi/Postastic",
    duration: "Jan 2024 - Current",
    type: "Personal",
    descipttion: "Twitter Clone",
    stacks: {
      frontend: ["next", `react`, `radix`, `zustand`, `tailwind`],
      backend: ["neon", "next"],
      database: ["sql"],
    },
  },
  {
    title: "Music Share",
    imageUrl: "/assets/projects/musicshare.png",
    demoUrl: "https://music-share-nu.vercel.app/",
    projectUrl: "https://github.com/viekoi/MusicShare",
    duration: "Jul 2023 - Jul 2023",
    type: "Personal",
    descipttion:
      "A website that allows users to submit and listen to a variety of songs, either from their own or others",
    stacks: {
      frontend: ["next", `react`, `radix`, `zustand`, `tailwind`, `supa`],
      backend: ["supa", "next"],
      database: ["sql", "supa"],
    },
  },
];

interface ProjectProps {
  className?: string;
}

const Project: React.FC<ProjectProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Pet Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-8">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                type={project.type}
                title={project.title}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                projectUrl={project.projectUrl}
                duration={project.duration}
                stacks={project.stacks}
                description={project.descipttion}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
