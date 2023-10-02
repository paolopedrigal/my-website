import Link from "next/link";
import NavBar from "@/app/(components)/NavBar";
import ProjectDisplay from "@/app/projects/ProjectDisplay";
import styles from "./page.module.css";

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
    <div className={styles.projectsPage}>
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
