"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Github } from "lucide-react";
import Badge from "./ui/Badge";

const Earth = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-500 border-0"></hr>
      <div className="mx-auto  p-4 flex  text-center text-neutral-900 justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Khôi Nguyễn<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Badge
            backgroundColor="#4267B2"
            url="https://www.facebook.com/profile.php?id=100009650203975"
            iconName="facebook"
          />
          <Badge
            backgroundColor="#000"
            url="https://github.com/viekoi"
            iconName="github"
          />
        </div>
      </div>
    </footer>
  );
};

export default Earth;
