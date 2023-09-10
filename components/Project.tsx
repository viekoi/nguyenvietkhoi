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
    title: "Trà Tinh Tế Admin Dashboard",
    imageUrl: "/assets/projects/tratinhteadmin.png",
    demoUrl: "https://heicha-admin-demo.vercel.app/",
    projectUrl: "https://github.com/viekoi/heicha-admin-demo",
    duration: "Jul 2023 - Present",
    descipttion:
      "a web application that e-commerce store owners use to oversee and manage their inventory, sales, and customer purchases.",
    type: "Personal",
    stacks: {
      frontend: ["next", `react`,`shadcn`,`zustand`,`tailwind`,`clerk`],
      backend: [`next`,`prisma`],
      database: ["sql",'planetscale'],
    },
  },
  {
    title: "Music Share",
    imageUrl: "/assets/projects/musicshare.png",
    demoUrl: "https://music-share-nu.vercel.app/",
    projectUrl: "https://github.com/viekoi/MusicShare",
    duration: "Jun 2023 - Jul 2023",
    type: "Personal",
    descipttion:
      "A website that allows users to submit and listen to a variety of songs, either from their own or others",
    stacks: {
      frontend: ["next", `react`,`radix`,`zustand`,`tailwind`,`supa`],
      backend: ["supa",'next'],
      database: ["sql",'supa'],
    },
  },
  {
    title: "Trà Tinh Tế Ecomerce",
    imageUrl: "/assets/projects/tratinhte.png",
    demoUrl: "https://heicha-97b11.web.app/",
    projectUrl: "https://github.com/viekoi/tratinhte",
    duration: "Jan 2023 - Apr 2023",
    descipttion:
      "A full-stack e-commerce website for my friend's coffee shop, named Heicha Trà tinh tế",
    type: "Personal",
    stacks: {
      frontend: ["react",],
      backend: ["mgdb",`firebase`],
      database: ["mgdb",'firebase'],
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
