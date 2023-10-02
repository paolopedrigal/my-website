import GitHubProject from "@/utils/components/GitHubProject";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  picPublicPath: string;
  summary: string;
  notesBulletPoints: string[];
  gitHubLink: string;
  deployedLink: string;
  techUsedList: string[];
}

interface Projects {
  [index: string]: Project;
}

const projectData: Projects = require("../../../assets/data/projects.json");

export default function Project({ params }: { params: { projectId: string } }) {
  const info: Project = projectData[params.projectId];
  return (
    <div>
      <Link href="/projects">Back</Link>
      <div>
        <div>
          <h1>{info.title}</h1>
          <GitHubProject gitHubLink={info.gitHubLink} />
        </div>
        <div>
          <Image
            src={info.picPublicPath}
            width={524}
            height={322}
            alt="Project Picture"
          />
          <div>
            {info.deployedLink != null ? (
              <p>
                Check it out <a href={info.deployedLink}>here!</a>
              </p>
            ) : null}
          </div>
          <span>
            <b>Tech used: </b>
            {info.techUsedList.map((tech, i) => {
              if (i + 1 == info.techUsedList.length) return <span>{tech}</span>;
              else return <span>{tech}, </span>;
            })}
          </span>
        </div>
        <div>
          <p>{info.summary}</p>
          <ul>
            {info.notesBulletPoints.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
