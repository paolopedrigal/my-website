import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/timeline">Timeline</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <a href="/Resume_PaoloPedrigal.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
