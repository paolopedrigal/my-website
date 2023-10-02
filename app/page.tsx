import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../utils/components/NavBar";
import ContactsButtons from "../utils/components/ContactsButtons";

interface Home {
  homeProfilePicPublicPath: string;
  homeDescription: string;
}

const homeData: Home = require("../assets/data/home.json");

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image
        src={homeData.homeProfilePicPublicPath}
        width={300}
        height={300}
        alt="Picture of Paolo Pedrigal"
      />
      <div>{homeData.homeDescription}</div>
      <ContactsButtons />
    </div>
  );
}
