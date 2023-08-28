'use client'

import React from 'react'
import Modal from './Modal'
import useExpandSkills from '@/hooks/useExpandSkills'
import Skills from '../Skills';

const skills = [
    {
      title: "Coding Languages",
      des: "JavaScript, Typescript",
    },
    {
      title: "Frameworks ",
      des: "ReactJs, NextJs",
    },
    {
      title: "Styling",
      des: "CSS, SASS, TAILWIND",
    },
    {
      title: "State Management",
      des: "Redux, Zustand, React Context Api",
    },
    {
      title: "Auth",
      des: "Next Auth, oAuth, Clerk, SupaBase",
    },
    {
      title: "Database Languages",
      des: "NoSql, Sql",
    },
    {
      title: "Ui Frameworks",
      des: "Radix, Shadcn, Bootstrap",
    },
    {
      title: "Version Control",
      des: "Git",
    },
  ];
  


const ExpandSkillsModal = () => {
    const expandSkills = useExpandSkills()


  return (
    <Modal isOpen={expandSkills.isOpen} onClose={expandSkills.onClose}>
          <div className="flex flex-col gap-4 mt-10">
          {skills.map((skill, index) => {
            return (
              <div className="" key={index}>
                <h4 className=" text-[14px] font-bold">{skill.title}</h4>
                <span className=" text-[12px] font-normal">{skill.des}</span>
              </div>
            );
          })}
        </div>
    </Modal>
  )
}

export default ExpandSkillsModal