import { useState, useRef } from "react";

export default function TaskForm() {
  const id = useRef(0);
  const [task, setTask] = useState({
    pjId: 1,
    id: "1",
    title: "",
    description: "",
    priority: "middle",
    dueDate: new Date().now,
    status: "in-progress",
  });

  const handleChangeState = (e) => {};

  const handleSubmit = () => {};

  return (
    <div className="container">
      <div className="title">
        제목
        <input value={task.title} onChange={handleChangeState} />
      </div>
      <div>
        설명
        <textarea
          value={task.description}
          className="desc"
          onChange={handleChangeState}
        />
      </div>
      <div>
        우선순위
        <select
          className="priority"
          value={task.priority}
          onChange={handleChangeState}
        >
          <option value="high">high</option>
          <option value="middle">middle</option>
          <option value="low">low</option>
        </select>
      </div>
      <div>
        마감일
        <input value={task.dueDate} onChange={handleChangeState} />
      </div>
      <div>
        진행상황
        <input value={task.status} onChange={handleChangeState} />
      </div>
      <div>
        <button onClick={handleSubmit}>태스크 추가</button>
      </div>
    </div>
  );
}
