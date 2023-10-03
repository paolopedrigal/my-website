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
      <div className={styles.navBarWrapper}>
        <NavBar />
      </div>
      <div className={styles.content}>
        <div className={styles.circle}>
          <Image
            src={homeData.homeProfilePicPublicPath}
            fill
            alt="Picture of Paolo Pedrigal"
            quality={100}
            style={{ objectFit: "cover" }}
            sizes="300px"
          />
        </div>

        <div className={styles.homeDescription}>{homeData.homeDescription}</div>
        <ContactsButtons />
      </div>
    </div>
  );
}
