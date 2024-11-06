import { useState, useRef } from "react";
import "./ProjectForm.css";

export default function ProjectForm({ handleAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dataId = useRef(1);

  const handleSubmit = () => {
    const newItem = {
      id: dataId.current.toString(),
      title,
      description,
      tasks: [],
    };
    handleAdd(newItem);
    setTitle("");
    setDescription("");
    dataId.current++;
  };

  return (
    <div className="container">
      <div className="inputDiv">
        프로젝트 제목
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputDiv">
        프로젝트 설명
        <textarea
        placeholder="설명"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      </div>
      <div className="buttonDiv">
        <button onClick={handleSubmit}>프로젝트 추가</button>
      </div>
    </div>
  );
}
