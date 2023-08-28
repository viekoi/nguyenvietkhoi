import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface JourneyProps {
  className?: string;
}

const Journey: React.FC<JourneyProps> = ({ className }) => {
  return (
    <Card className={cn(`bg-white shadow-md`, className)}>
      <CardHeader>
        <CardTitle>Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-9 top-2 w-[4px] h-full bg-gray-300  origin-top"></div>
          <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-2">
            <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start ">
              <figure className="stroke-blue-600 absolute left-0 -top-[5%]">
                <svg
                  className="-rotate-90 "
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    pathLength="1"
                    className="stroke-blue-600 fill-none  animate-pulse  stroke-1  dark:stroke-light"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    pathLength="1"
                    className=" fill-blue-600 stroke-[5px] dark:fill-dark animate-pulse"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="10"
                    pathLength="1"
                    className="stroke-1 fill-blue-200 "
                  ></circle>
                </svg>
              </figure>
              <div className="text-left ml-5  ">
                <h3 className="capitalize font-bold text-2xl sm:text-xl text-blue-600  ">
                  Final year university student
                </h3>
                <span className="capitalize  font-normal sm:text-sm opacity-[80%]">
                  2021 - Present | UEH University, HCM city{" "}
                  <span className="inline-block">
                    {" "}
                    <Link
                      href="https://ueh.edu.vn"
                      target="_blank"
                      rel="noreferrer"
                      className=" flex items-center justify-center w-[24px] h-[24px] rounded-[50%] shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 bg-transparent "
                    >
                      <div className="">
                        <Image
                          src={`/assets/Journey/ueh.png`}
                          alt="ueh"
                          width={24}
                          height={24}
                        />
                      </div>
                    </Link>
                  </span>
                </span>
                <p className="font-medium w-full md:text-sm ">
                  High scores in all programming and math subjects include data
                  structure and algorithms, data science, web development, and
                  software engineering.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Journey;
