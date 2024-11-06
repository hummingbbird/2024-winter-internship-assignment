import { useState, useRef } from "react";
import "../styles/TaskForm.css";

export default function TaskForm({ handleAddTask, projectId, closeForm }) {
  const taskid = useRef(0);
  const [task, setTask] = useState({
    pjId: projectId,
    id: taskid.current,
    title: "",
    description: "",
    priority: "middle",
    dueDate: "",
    status: "in-progress",
  });

  const handleChangeTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAddTask(projectId, task);
    closeForm();
    setTask({
      pjId: projectId,
      title: "",
      description: "",
      priority: "middle",
      dueDate: "",
      status: "in-progress",
    });
  };

  return (
    <div className="taskformcontainer">
      <div className="input">
        테스크 제목
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={task?.title}
          onChange={handleChangeTask}
        />
      </div>
      <div className="input">
        테스크 설명
        <textarea
          name="description"
          placeholder="설명"
          value={task?.description}
          onChange={handleChangeTask}
        ></textarea>
      </div>
      <div className="input">
        우선순위
        <select
          name="priority"
          className="priority"
          value={task?.priority}
          onChange={handleChangeTask}
        >
          <option value="high">high</option>
          <option value="middle">middle</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="input">
        마감일
        <input
          type="text"
          name="dueDate"
          value={task?.dueDate}
          placeholder="ex) 2024-10-20"
          onChange={handleChangeTask}
        />
      </div>
      <div className="buttonDiv">
        <button onClick={handleSubmit}>추가하기</button>
      </div>
    </div>
  );
}
