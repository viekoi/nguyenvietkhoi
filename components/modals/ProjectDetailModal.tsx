"use client";
import React from "react";
import Modal from "./Modal";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      abc
    </Modal>
  );
};

export default ProjectDetailModal;
