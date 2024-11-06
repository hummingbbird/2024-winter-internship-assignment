import { Link } from "react-router-dom";
import "./ProjectList.css";
import ProjectForm from "./ProjectForm";

const ProjectList = ({ projects, handleAdd }) => {
  return (
    <div className="container">
      <span className="title">프로젝트 관리 대시보드</span>
      <ProjectForm handleAdd={handleAdd}/>
      <div className="table">
        <span className="semititle">프로젝트 목록</span>
        <table>
          <thead>
            <tr>
              <th>프로젝트명</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((it) => (
              <tr key={it.id}>
                <td>
                  <Link className="link" to={`/project/${it.id}`}>
                    {it.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
