'use client'

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 rounded-t-sm ">
      <div className="min-h-[25vh] relative">
        <div className="absolute right-1/2 translate-x-1/2 top-3/4 -translate-y-1/2 text-center">
          <h1 className="text-[32px] font-semibold text-[#050505] ">
            Nguyễn Việt Khôi
          </h1>
          <span className="font-semibold text-[16px] text-stone-400">Web and future Mobile dev</span>
        </div>
      </div>

      <div className=" mx-1 min-h-[25vh] border-t-[1px] rounded-t-sm border-black border-solid">

      </div>
    </div>
  );
};

export default About;
