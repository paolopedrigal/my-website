"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./components.module.css";

interface LinkStyle {
  textDecoration: string;
  color: string;
  fontWeight: string;
}

const unclicked: LinkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "200",
};

const clicked: LinkStyle = {
  textDecoration: "none",
  color: "#F9E110",
  fontWeight: "400",
};

export default function NavBar() {
  const pathName: any = usePathname();
  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.navBar}>
        <li className={styles.navBarListItem}>
          {pathName == "/" ? (
            <Link href="/" style={clicked}>
              Home
            </Link>
          ) : (
            <Link href="/" style={unclicked}>
              Home
            </Link>
          )}
        </li>
        <li>
          {pathName == "/timeline" ? (
            <Link href="/timeline" style={clicked}>
              Timeline
            </Link>
          ) : (
            <Link href="/timeline" style={unclicked}>
              Timeline
            </Link>
          )}
        </li>
        <li>
          {pathName == "/projects" ? (
            <Link href="/projects" style={clicked}>
              Projects
            </Link>
          ) : (
            <Link href="/projects" style={unclicked}>
              Projects
            </Link>
          )}
        </li>
        <li>
          <a href="/Resume_PaoloPedrigal.pdf" target="_blank" style={unclicked}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
