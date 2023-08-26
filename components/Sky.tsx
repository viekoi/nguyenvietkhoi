"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Star from "./Star";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Dog from "./Dog";



const stars = [1,2,3,4,5,6,7,8,9,10]

const Sky = () => {
  const [isThemed, setIsThemed] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsThemed(true);
  }, [theme]);

  if (!isThemed) return null;
  return (
    <div className="h-[35vh] relative ">
      <div className="h-full text-[10px] relative z-[1px] overflow-hidden  ">
        {theme == "dark" ? (
          <>
            {stars.map((star,index)=>{
              return <Star index={index} key={index} />
            })}
          </>
        ):(
          
            <Dog/>
         
        )
      }

        <div
          className={cn(
            "h-full w-full absolute top-1/2 transition-transform duration-3000 rounded-[50%]",
            theme === "light" ? "rotate-[0]" : "-rotate-180"
          )}
        >
          <button
            className="themeBtn_sun"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <div className="themeBtn_ray1"></div>
            <div className="themeBtn_ray2"></div>
            <div className="themeBtn_ray3"></div>
            <div className="themeBtn_ray4"></div>
          </button>
          <button
            className="themeBtn_moon"
            onClick={() => {
              setTheme("light");
            }}
          />
        </div>
      </div>
      <div className="absolute z-10 top-[100%] -translate-y-1/2 left-[50%] -translate-x-1/2">
        <Image
          src={"/assets/me.jpg"}
          alt="me"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sky;
