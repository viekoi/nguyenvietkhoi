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
        <ProjectCard className=""/>
      </CardContent>
    </Card>
  );
};

export default Project;
