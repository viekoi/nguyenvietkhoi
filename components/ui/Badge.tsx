'use client'
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
import React from "react";


export type imageUrlVariants={
  imageUrl:
  | "html"
  | "css"
  | "js"
  | "react"
  | "reactnt"
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
  | 'ueh';
}

export interface BadgeProps extends imageUrlVariants {
  url: string;
  backgroundColor?: string;
  className?: string;
}

const colorVariantList: Record<BadgeProps["imageUrl"], StaticImageData> = {
  html: Html,
  css: Css,
  js: Javascript,
  react: ReactImg,
  reactnt: ReactNative,
  tailwind: Tailwind,
  github: Github,
  ts: Ts,
  next: NextJS,
  mgdb: MongoDB,
  sql: Sql,
  prisma: Prisma,
  sass: Sass,
  redux: Redux,
  zustand: Zustand,
  clerk: Clerk,
  supa: SupaBase,
  nextauth: NextAuth,
  nosql: Nosql,
  radix: Radix,
  shadcn: Shadcn,
  bootstrap: Bootstrap,
  git: Git,
  ueh:Ueh
};

const Badge:React.FC<BadgeProps> = ({
  url,
  backgroundColor,
  imageUrl,
  className,
  ...props
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        " cursor-pointer overflow-hidden rounded-[50%] shadow-sm hover:scale-105 ease-in duration-300 relative ",
        className
      )}
      style={{
        backgroundColor: `${backgroundColor ? backgroundColor : `transparent`}`,
      }}
    >
      <Image
        src={colorVariantList[`${imageUrl}`]}
        alt="image"
        style={{ objectFit: "contain" }}
        fill
        className="absolute "
      />
    </Link>
  );
};

export default Badge;
