import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import "../styles/ProjectDetail.css";

export default function ProjectDetail({
  projects,
  handleAddTask,
  handleDelete,
  handleDeleteTask,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { id: targetId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((it) => it.id === targetId);

  const handleDeleteProject = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      handleDelete(targetId);
      alert("삭제 되었습니다.");
      navigate("/");
    }
  };

  const closeForm = () => setIsOpen(false);

  return (
    <div className="ProjectDetailContainer">
      <p className="title">프로젝트: {project.title}</p>
      <div className="deleteDiv">
        <button className="deletebutton" onClick={handleDeleteProject}>
          프로젝트 삭제
        </button>
      </div>
      <div className="description">
        <p>설명: {project.description}</p>
        <p>task 개수: {project.tasks.length}</p>
      </div>
      <div className="task">
        <div className="button">
          {isOpen ? (
            <div />
          ) : (
            <button
              // type="submit"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              테스크 추가하기
            </button>
          )}

          {isOpen ? (
            <TaskForm
              handleAddTask={handleAddTask}
              projectId={targetId}
              closeForm={closeForm}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="taskList">
        <div className="infoDiv">
          <p className="semititle">테스크 목록</p>
          <p className="info">*우선순위가 높은 순으로 정렬됩니다.</p>
        </div>

        {project.tasks.map((it) => (
          <TaskItem task={it} key={it.id} projectId={targetId} handleDeleteTask={handleDeleteTask}/>
        ))}
      </div>
    </div>
  );
}
