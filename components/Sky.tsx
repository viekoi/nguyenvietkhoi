import React from "react";
import Image from "next/image";

const Sky = () => {
  return (
    <div className="h-screen">
      <div className="h-1/5">Dynamic sky</div>
      <div className="flex justify-center">
        <Image
          src={"/assets/me.jpg"}
          alt="me"
          width={325}
          height={325}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sky;
