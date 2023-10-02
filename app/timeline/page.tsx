import Link from "next/link";
import NavBar from "@/app/(components)/NavBar";
import styles from "./page.module.css";

interface TimelineEvent {
  id: string;
  dateEndMonth: string;
  dateEndYear: number;
  eventTitle: string;
  company: string;
}

interface Timeline {
  [index: string]: TimelineEvent;
}

const timelineData: Timeline = require("../../assets/data/timeline.json");

export default function TimelinePage() {
  return (
    <div className={styles.timelinePage}>
      <NavBar />
      <ul>
        {Object.keys(timelineData).map((timelineId) => (
          <li key={timelineId}>
            <Link href={`/timeline/${timelineId}`}>
              {timelineData[timelineId].eventTitle} @{" "}
              {timelineData[timelineId].company}{" "}
              {timelineData[timelineId].dateEndMonth}{" "}
              {timelineData[timelineId].dateEndYear}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
