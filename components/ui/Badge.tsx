'use client'
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import ReactNative from "../../public/assets/skills/react-native.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Github from "../../public/assets/skills/github1.png";
import Ts from "../../public/assets/skills/typescript.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import MongoDB from "../../public/assets/skills/mongo.png";
import Sql from "../../public/assets/skills/sql.png";
import Prisma from "../../public/assets/skills/prisma.png";
import Sass from "../../public/assets/skills/sass.png";
import Redux from "../../public/assets/skills/redux.png";
import Zustand from "../../public/assets/skills/zustand.png";
import Clerk from "../../public/assets/skills/clerk.png";
import SupaBase from "../../public/assets/skills/supabase.png";
import NextAuth from "../../public/assets/skills/nextauth.png";
import Nosql from "../../public/assets/skills/nosql.png";
import Radix from "../../public/assets/skills/radix.png";
import Shadcn from "../../public/assets/skills/shadcn.png";
import Bootstrap from "../../public/assets/skills/bootstrap.png";
import Git from "../../public/assets/skills/git.png";
import Ueh from "../../public/assets/journey/ueh.png"
import Planetscale from "../../public/assets/skills/planetscale.png"
import Firebase  from "../../public/assets/skills/firebase.png"
import TMA from "../../public/assets/journey/tma.png"
import NEON from "../../public/assets/skills/neon.svg"
import TANSTACK from "../../public/assets/skills/tanstack.png"
import DRIZZLE from "../../public/assets/skills/drizzle.png"








export type imageUrlVariants={
  variant:
  | "html"
  | "css"
  | "js"
  | "react"
  | "tailwind"
  | "github"
  | "ts"
  | "next"
  | "mgdb"
  | "sql"
  | "prisma"
  | "sass"
  | "redux"
  | "zustand"
  | "clerk"
  | "supa"
  | "nextauth"
  | "nosql"
  | "radix"
  | "shadcn"
  | "bootstrap"
  | "git"
  | 'ueh'
  | 'planetscale'
  | 'firebase'
  | 'tma'
  | "neon"
  | "tanstack"
  | "drizzle"
}

export interface BadgeProps extends imageUrlVariants {
  className?: string;
}


const variantList: Record<BadgeProps["variant"], {imageUrl:StaticImageData,url:string}> = {
  html:{
    imageUrl:Html,
    url:`https://developer.mozilla.org/en-US/docs/Web/CSS`
  },
  css:{
    imageUrl:Css,
    url:'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  js:{
    imageUrl:Javascript,
    url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  react:{
    imageUrl:ReactImg,
    url:"https://react.dev/"
  },
  tailwind:{
    imageUrl:Tailwind,
    url:"https://tailwindcss.com/"
  },
  github:{
    imageUrl:Github,
    url:"https://github.com/"
  },
  ts:{
    imageUrl:Ts,
    url:'https://www.typescriptlang.org/docs/'
  },
  next:{
    imageUrl: NextJS, 
    url: `https://nextjs.org/`
  },
  mgdb:{
    imageUrl: MongoDB, url: `https://mongodb.com/` 
  },
  sql:{
    imageUrl: Sql, url: `https://dev.mysql.com/doc/`
  },
  prisma:{
    imageUrl:Prisma,
    url:"https://www.prisma.io/"
  },
  drizzle:{
    imageUrl:DRIZZLE,
    url:"https://orm.drizzle.team/"
  },
  sass:{
    imageUrl:Sass,
    url:"https://sass-lang.com/"
  },
  redux:{
    imageUrl:Redux,
    url:"https://redux.js.org/"
  },
  zustand:{
    imageUrl:Zustand,
    url:"https://docs.pmnd.rs/zustand/getting-started/introduction"
  },
  clerk:{
    imageUrl:Clerk,
    url:"https://clerk.com/"
  },
  supa:{
    imageUrl:SupaBase,
    url:'https://supabase.com/'
  },
  nextauth:{
    imageUrl:NextAuth,
    url:`https://next-auth.js.org/`
  },
  nosql:{
    imageUrl:Nosql,
    url:`https://www.mongodb.com/document-databases`
  },
  radix: {
    imageUrl: Radix, url: "https://www.radix-ui.com/"
  },
  shadcn:{
    imageUrl: Shadcn, url: "https://ui.shadcn.com/"
  },
  bootstrap:{
    imageUrl: Bootstrap,
        url: "https://getbootstrap.com/",
  },
  git: {
    imageUrl: Git, url: "https://git-scm.com/"
  },
  planetscale:{
    imageUrl:Planetscale,
    url:"https://planetscale.com/"
  },
  ueh:{
    imageUrl:Ueh,
    url:"https://www.ueh.edu.vn/"
  },
  firebase:{
    imageUrl:Firebase,
    url:"https://firebase.google.com/"
  },
  tma:{
    imageUrl:TMA,
    url:"https://www.tmasolutions.vn/"
  },
  neon:{
    imageUrl:NEON,
    url:"https://neon.tech/"
  },
  tanstack:{
    imageUrl:TANSTACK,
    url:"https://tanstack.com/"
  }
};





const Badge:React.FC<BadgeProps> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <Link
      href={variantList[`${variant}`].url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        " cursor-pointer overflow-hidden rounded-[50%]  relative ",
        className
      )}
    >
      <Image
        src={variantList[`${variant}`].imageUrl}
        alt="image"
        style={{ objectFit: "contain"}}
        fill
        className="absolute hover:opacity-50 bg-neutral-200"
      />
    </Link>
  );
};

export default Badge;
