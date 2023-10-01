import Link from "next/link";
import NavBar from "@/utils/components/NavBar";

interface timelineEvent {
  id: string;
  dateEndMonth: string;
  dateEndYear: number;
  eventTitle: string;
  company: string;
}

const timelineData: timelineEvent[] = require("../../assets/data/timeline.json");

export default function TimelinePage() {
  return (
    <div>
      <NavBar />
      <ul>
        {timelineData.map((eventObject) => (
          <li>
            <Link href={`/timeline/${eventObject.id}`}>
              {eventObject.eventTitle} @ {eventObject.company}{" "}
              {eventObject.dateEndMonth} {eventObject.dateEndYear}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
