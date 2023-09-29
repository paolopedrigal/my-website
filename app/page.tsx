import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../utils/components/NavBar";

interface homeJson {
  homeDescription: string;
  linkedInURL: string;
  gitHubURL: string;
  email: string;
}

const homeData: homeJson = require("../utils/json/home.json");

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>{homeData.homeDescription}</div>
    </div>
  );
}
