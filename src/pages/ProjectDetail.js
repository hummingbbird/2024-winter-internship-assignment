import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail({ projects }) {
  const { id: targetId } = useParams();
  const project = projects.find((it) => it.id === targetId);
  return (
    <div className="container">
      <h2>{project.id}</h2>
      <div className="description">
        <p>프로젝트 명: 프로젝트{project.id}</p>
        <p>프로젝트 설명: 프로젝트{project.id}입니다.</p>
        <p>task 개수: {project.tasks.length}</p>
      </div>
      <div className="table">
      </div>
    </div>
  );
}
