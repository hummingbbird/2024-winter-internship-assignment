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
      tasks: [
        {
          id: 0,
          title: "기존 태스크",
          description: "설명",
          priority: "low",
          dueDate: "2024-12-25",
          status: "not-started",
        },
        {
          id: "1",
          title: "프로젝트1",
          description: "프로젝트1설명",
          priority: "high",
          dueDate: "2024-10-10",
          tasks: [],
          status: "in-progress",
        },
      ],
    },
  ]);

  const handleAdd = (targetProject) => {
    setProjects([...projects, targetProject]);
  };

  const handleAddTask = (pjId, newItem) => {
    setProjects((it) =>
      it.map((project) => {
        if (project.id === pjId) {
          const MAXID = project.tasks.length
            ? Math.max(...project.tasks.map((task) => task.id)) + 1
            : 0;

          return {
            ...project,
            tasks: [...project.tasks, { ...newItem, id: MAXID }],
          };
        }
        return project;
      })
    );
  };

  const handleDeleteTask = (projectId, taskId) => {
    setProjects((it) =>
      it.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );
  };
  const handleDelete = (projectId) => {
    setProjects((it) => it.filter((project) => project.id !== projectId));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProjectList projects={projects} handleAdd={handleAdd} />}
        />
        <Route
          path="/project/:id"
          element={
            <ProjectDetail
              projects={projects}
              handleAddTask={handleAddTask}
              handleDelete={handleDelete}
              handleDeleteTask={handleDeleteTask}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
