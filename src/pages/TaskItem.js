import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TaskItem.css";
export default function TaskItem({ task, projectId, handleDeleteTask }) {
  const navigate = useNavigate();
  const today = new Date();
  const dueDate = new Date(task.dueDate);
  const timeDiff = dueDate - today;
  const remain = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let statusInfo = "";
  if (task.status === "done") {
    statusInfo = "done";
  } else if (remain < 0) {
    statusInfo = "overdue";
  } else if (remain <= 3) {
    statusInfo = "soon";
  }

  return (
    <div className={`taskitemcontainer ${statusInfo}`}>
      <p>task: {task.title}</p>
      <p>설명: {task.description}</p>
      <p>우선순위: {task.priority}</p>
      <p>마감일: {task.dueDate}</p>
      <p>상태: {task.status}</p>
      <div className="btndiv">
        <button
          className="deletebtn"
          onClick={() => {
            if (window.confirm("삭제하시겠습니까?")) {
              handleDeleteTask(projectId, task.id);
              alert("삭제 되었습니다.");
              navigate(`/project/${projectId}`);
            }
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}
