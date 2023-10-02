import Link from "next/link";
import NavBar from "@/utils/components/NavBar";
import ProjectDisplay from "@/utils/components/ProjectDisplay";

interface Project {
  id: string;
  title: string;
  picPublicPath: string;
}

interface Projects {
  [index: string]: Project;
}

const projectsData: Projects = require("../../assets/data/projects.json");

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <ul>
        {Object.values(projectsData).map((project) => {
          let projectId: string = project.id;
          return (
            <Link href={`/projects/${projectId}`} key={projectId}>
              <ProjectDisplay
                projectTitle={project.title}
                picPath={project.picPublicPath}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
