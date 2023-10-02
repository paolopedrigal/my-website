import Image from "next/image";

export default function ProjectDisplay({ projectTitle, picPath }: any) {
  return (
    <li>
      <Image
        src={picPath}
        width={390}
        height={212}
        alt={`Picture of ${projectTitle}`}
      />
      {projectTitle}
    </li>
  );
}
