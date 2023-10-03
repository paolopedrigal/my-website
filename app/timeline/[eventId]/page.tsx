import Link from "next/link";

interface timelineEvent {
  dateStartMonth: string;
  dateStartYear: number;
  dateEndMonth: string;
  dateEndYear: number;
  eventTitle: string;
  company: string;
  city: string;
  state: string;
  summaryBulletPointsTitle: string;
  summaryBulletPoints: string[];
  skillsBulletPointsTitle: string;
  skillsBulletPoints: string[];
  keyTakeawaysTitle: string;
  keyTakeaways: string[];
}

interface timeline {
  [index: string]: timelineEvent;
}

const timelineEventData: timeline = require("../../../assets/data/timeline.json");

export default function TimelineEvent({
  params,
}: {
  params: { eventId: string };
}) {
  //   const timeline: timelineEvent = timelineEventData[`${params.eventId}`];
  const info: timelineEvent = timelineEventData[params.eventId];
  return (
    <div>
      <Link href="/timeline">Back</Link>
      <div>
        <div>
          <h1>{info.eventTitle}</h1>
          <h2>{info.company}</h2>
        </div>
        <div>
          <h3>
            {info.dateStartMonth} {info.dateStartYear} - {info.dateEndMonth}{" "}
            {info.dateEndYear}
          </h3>
          <h3>
            {info.city}, {info.state}
          </h3>
        </div>
        <div>
          <h4>{info.summaryBulletPointsTitle}</h4>
          <ul>
            {info.summaryBulletPoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
          <div>
            <span>{info.skillsBulletPointsTitle}: </span>
            {info.skillsBulletPoints.map((skill, i) => {
              if (i + 1 == info.skillsBulletPoints.length)
                return <span>{skill}</span>;
              else return <span>{skill}, </span>;
            })}
          </div>
          <h4>{info.keyTakeawaysTitle}</h4>
          <ul>
            {info.keyTakeaways?.map((takeaway) => (
              <li>{takeaway}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}