import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [projects, setProjects] = useState([
    {
      id: "0",
      title: "프로젝트0",
      description: "프로젝트 설명",
      tasks: [],
    },
  ]);
  const [tasks, setTasks] = useState([]);

  const handleAdd = (targetProject) => {
    setProjects([...projects, targetProject]);
    console.log(projects);
  };

  const onDelete = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProjectList projects={projects} handleAdd={handleAdd} />}
        />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
