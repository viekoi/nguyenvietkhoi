"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Badge from "../ui/Badge";
import { imageUrlVariants } from "../ui/Badge";
import { ValueOf } from "next/dist/shared/lib/constants";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
  description:string
  stacks: {
    frontend: (imageUrlVariants[`variant`])[];
    backend: (imageUrlVariants[`variant`])[];
    database: (imageUrlVariants[`variant`])[];
  };
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  type,
  stacks,
}) => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <ul className="flex flex-col gap-y-2">
        <li className="text-[14px]">
          <span className=" text-[16px] font-bold ">Description:</span> {description}
        </li>
        <li className="text-[14px]">
          <span className=" text-[16px] font-bold "> Type:</span> {type}
        </li>

        <li className="text-[14px]">
          <span className=" text-[16px] font-bold"> Stacks:</span>{" "}
          <ul className=" mt-2 ml-5 flex flex-col gap-y-5">
            <li className="text-[12px] flex gap-x-1 items-center">
              <div className=" text-[12px] font-bold min-w-[70px]">
                Front-end:
              </div>
              <div className="flex gap-x-2 items-center  ">
                {stacks.frontend.map((badge) => (
                  <Badge
                    key={badge}
                    variant={badge}
                    className="w-[30px] h-[30px]"
                  />
                ))}
              </div>
            </li>

            <li className="text-[12px] flex gap-x-1 items-center">
              <div className=" text-[12px] font-bold min-w-[70px]">
                Back-end:
              </div>
              <div className="flex gap-x-1 ">
                <div className="flex gap-x-2 items-center ">
                  {stacks.backend.map((badge) => (
                    <Badge
                      key={badge}
                      variant={badge}
                      className="w-[30px] h-[30px]"
                    />
                  ))}
                </div>
              </div>
            </li>

            <li className="text-[12px] flex gap-x-1 items-center">
              <div className=" text-[12px] font-bold min-w-[70px]">
                Database:
              </div>
              <div className="flex gap-x-1 ">
                <div className="flex gap-x-2 items-center  ">
                  {stacks.database.map((badge) => (
                    <Badge
                      key={badge}
                      variant={badge}
                      className="w-[30px] h-[30px]"
                    />
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </Modal>
  );
};

export default ProjectDetailModal;
