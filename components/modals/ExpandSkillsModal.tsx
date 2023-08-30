'use client'

import React from 'react'
import Modal from './Modal'
import useExpandSkills from '@/hooks/useExpandSkills'
import Badge from '../ui/Badge'


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
import Redux from '../../public/assets/skills/redux.png'
import Zustand from '../../public/assets/skills/zustand.png'
import Clerk from '../../public/assets/skills/clerk.png'
import SupaBase from '../../public/assets/skills/supabase.png'
import NextAuth from '../../public/assets/skills/nextauth.png'
import Nosql from '../../public/assets/skills/nosql.png'
import Radix from '../../public/assets/skills/radix.png'
import Shadcn from '../../public/assets/skills/shadcn.png'
import Bootstrap from '../../public/assets/skills/bootstrap.png'
import Git from '../../public/assets/skills/git.png'

import { StaticImageData } from 'next/image'



type extandSkill ={ 
  title:string;
  skills:{ name:string,imageUrl:StaticImageData | string,url:string}[]

}


const extandSkills:extandSkill[] = [
    {
      title: "Coding Languages",
      skills:[
        {
          name: "TypeScript",
          imageUrl: Ts,
          url: `https://www.typescriptlang.org/docs/`,
        },
        {
          name: "JavaScript",
          imageUrl: Javascript,
          url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
        },
      ],
    },
    {
      title: "Frameworks ",
      skills:[
        { name: "Next", imageUrl: NextJS, url: `https://nextjs.org/` },
        { name: "React", imageUrl: ReactImg, url: `https://react.dev/` },
      ],
    },
    {
      title: "Styling",
      skills:[
        {
          name: "CSS",
          imageUrl: Css,
          url: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
        },
         { name: "Tailwind", imageUrl: Tailwind, url: "https://tailwindcss.com/" },
         { name: "Sass", imageUrl: Sass, url: "https://sass-lang.com/documentation/" },
      ],
    },
    {
      title: "State Management",
      skills:[
        { name: "Redux", imageUrl: Redux, url: "https://redux.js.org/" },
        { name: "Zustand", imageUrl: Zustand, url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
        { name: "React context api", imageUrl: ReactImg, url: "https://legacy.reactjs.org/docs/context.html" },

      ],
    },
    {
      title: "Auth",
      skills:[
        { name: "Clerk", imageUrl: Clerk, url: "https://clerk.com/" },
        { name: "SupaBase", imageUrl: SupaBase, url: "https://supabase.com/" },
        { name: "Next Auth", imageUrl: NextAuth, url: "https://next-auth.js.org/" },

      ],
    },
    {
      title: "Database Languages",
      skills:[
        { name: "SQL", imageUrl: Sql, url: "https://dev.mysql.com/doc/" },
        { name: "NoSql", imageUrl:Nosql, url: "https://www.mongodb.com/document-databases" },
      ],
    },
    {
      title: "Ui Frameworks",
      skills:[
        { name: "Radix", imageUrl: Radix, url: "https://www.radix-ui.com/" },
        { name: "Shadcn", imageUrl:Shadcn, url: "https://ui.shadcn.com/" },
        { name: "Bootstrap", imageUrl:Bootstrap, url: "https://getbootstrap.com/" },
      ],
    },{
      title: "Version control",
      skills:[
        { name: "Git", imageUrl: Git, url: "https://git-scm.com/" },
      ]
    },
    // {
    //   title: "Auth",
    //   skills: "Next Auth, oAuth, Clerk, SupaBase",
    // },
    // {
    //   title: "Database Languages",
    //   skills: "NoSql, Sql",
    // },
    // {
    //   title: "Ui Frameworks",
    //   skills: "Radix, Shadcn, Bootstrap",
    // },
    // {
    //   title: "Version Control",
    //   skills: "Git",
    // },
  ];
  


const ExpandSkillsModal = () => {
    const expandSkills = useExpandSkills()


  return (
    <Modal isOpen={expandSkills.isOpen} onClose={expandSkills.onClose}>
          <div className="flex flex-col gap-4 mt-10">
          {extandSkills.map((extandSkill, index) => {
            return (
              <div className="" key={index}>
                <h4 className=" text-[14px] font-bold">{extandSkill.title}</h4>
                <div className="flex gap-2">
                  {extandSkill.skills.map((skill,index)=>{
                      return(
                        <Badge key={index} imageUrl={skill.imageUrl} url={skill.url} className='w-[30px] h-[30px] '/>
                      )
                  })}
                </div>
              </div>
            );
          })}
        </div>
    </Modal>
  )
}

export default ExpandSkillsModal
