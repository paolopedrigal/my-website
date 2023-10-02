import Link from "next/link";
import NavBar from "@/utils/components/NavBar";

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
  Object.keys(timelineData).map((timelineId) => {
    console.log(timelineData[timelineId].id);
  });
  return (
    <div>
      <NavBar />
      <ul>
        {Object.keys(timelineData).map((timelineId) => (
          <li>
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
