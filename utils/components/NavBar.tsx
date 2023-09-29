import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test">Test</Link>
        </li>
      </ul>
    </div>
  );
}
