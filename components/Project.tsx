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

const projects = [
  {
    title:"Trà Tinh Tế Admin Dashboard",
    imageUrl: "/assets/projects/tratinhteadmin.png",
    demoUrl: "https://heicha-admin-demo.vercel.app/",
    projectUrl: "https://github.com/viekoi/heicha-admin-demo",
    duration: "Jul 2023 - Present",
  },
  {
    title:"Music Share",
    imageUrl: "/assets/projects/musicshare.png",
    demoUrl: "https://music-share-nu.vercel.app/",
    projectUrl: "https://github.com/viekoi/MusicShare",
    duration: "Jun 2023 - Jul 2023",
  },
  {

    title:"Trà Tinh Tế Ecomerce",
    imageUrl: "/assets/projects/tratinhte.png",
    demoUrl: "https://heicha-97b11.web.app/",
    projectUrl: "https://github.com/viekoi/tratinhte",
    duration: "Jan 2023 - Apr 2023",
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
              title={project.title}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              projectUrl={project.projectUrl}
              duration={project.duration}
            />
          );
        })}

        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
