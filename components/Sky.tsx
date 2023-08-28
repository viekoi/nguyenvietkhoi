"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ShootingStar from "./ShootingStar";
import Star from "./Star";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Dog from "./Dog";
import Cloud from "./Cloud";

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

const Sky = () => {
  const [isThemed, setIsThemed] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsThemed(true);
  }, []);

  if (!isThemed) return (
    <div className="h-[40vh] relative ">
      <div className="absolute z-50 top-[95%] -translate-y-[100%] left-[50%] -translate-x-1/2 flex items-center flex-col justify-center text-center ">
        <Image
          src={"/assets/me.jpg"}
          alt="me"
          width={250}
          height={250}
          className=" rounded-full w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[225px] lg:h-[225px] "
        />

        <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-back dark:text-white ">
          Nguyễn Việt Khôi
        </h1>
        <span className="font-semibold text-[14px] sm:text-[16px] text-[#f79e38] dark:text-stone-400">
          Web and future Mobile dev
        </span>
      </div>
    </div>
  );
    
 

  return (
    <div className="h-[40vh] relative ">
      <div className="h-full text-[5px] sm:text-[8px] md:text-[10px]  relative z-[1px] overflow-hidden  ">
        {theme === "light" ? (
          <>
            <Cloud className="top-[10%] left-[20%] absolute" />
            <Cloud className="top-[25%] left-[40%] absolute" />
            <Cloud className="top-[20%] left-[60%] absolute" />
            <Cloud className="top-[15%] left-[80%] absolute" />
            <Dog />
          </>
        ) : (
          <>
            <Star className="left-[20%]" />
            <Star className="left-[40%]" />
            <Star className="left-[60%]" />
            <Star className="left-[80%]" />
            {stars.map((star, index) => {
              return <ShootingStar index={index} key={index} />;
            })}
          </>
        )}

        <div
          className={cn(
            "h-full w-full absolute top-1/2 transition-transform duration-3000 rounded-[50%]",
            "dark:-rotate-180 rotate-0"
            // theme === "light" ? "rotate-[0]" : "-rotate-180" 
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
      <div className="absolute z-50 top-[95%]   -translate-y-[100%] left-[50%] -translate-x-1/2 flex items-center flex-col justify-center text-center ">
        <Image
          src={"/assets/me.jpg"}
          alt="me"
          width={250}
          height={250}
          className=" rounded-full w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[225px] lg:h-[225px] "
        />

        <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-back dark:text-white ">
          Nguyễn Việt Khôi
        </h1>
        <span className="font-semibold text-[14px] sm:text-[16px] text-[#f79e38] dark:text-stone-400">
          Web and future Mobile dev
        </span>
      </div>
    </div>
  );
};

export default Sky;
