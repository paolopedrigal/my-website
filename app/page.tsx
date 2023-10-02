import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./(components)/NavBar";
import ContactsButtons from "./(components)/ContactsButtons";

interface Home {
  homeProfilePicPublicPath: string;
  homeDescription: string;
}

const homeData: Home = require("../assets/data/home.json");

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <NavBar />
        <Image
          src={homeData.homeProfilePicPublicPath}
          width={300}
          height={300}
          alt="Picture of Paolo Pedrigal"
        />
        <div className={styles.homeDescription}>{homeData.homeDescription}</div>
        <ContactsButtons />
      </div>
    </div>
  );
}
