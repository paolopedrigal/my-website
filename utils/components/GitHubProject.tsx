import Image from "next/image";

interface GitHubIcon {
  gitHubIconPublicPath: string;
}

const gitHubIcon: GitHubIcon = require("../../assets/data/contacts.json");

export default function GitHubProject({ gitHubLink }: any) {
  return (
    <div>
      <a href={gitHubLink} target="_blank">
        <Image
          src={gitHubIcon.gitHubIconPublicPath}
          width={25}
          height={25}
          alt="Github Link"
        />
      </a>
    </div>
  );
}
