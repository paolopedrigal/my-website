import Image from "next/image";

interface contactsJson {
  linkedInLink: string;
  gitHubLink: string;
  emailLink: string;
  linkedInIconPublicPath: string;
  gitHubIconPublicPath: string;
  emailIconPublicPath: string;
}

const contactsData: contactsJson = require("../../assets/data/contacts.json");

export default function ContactsButtons() {
  return (
    <div>
      <ul>
        <li>
          <a href={contactsData.gitHubLink} target="_blank">
            <Image
              src={contactsData.gitHubIconPublicPath}
              width={25}
              height={25}
              alt="GitHub Link"
            />
          </a>
        </li>
        <li>
          <a href={contactsData.linkedInLink} target="_blank">
            <Image
              src={contactsData.linkedInIconPublicPath}
              width={25}
              height={25}
              alt="LinkedIn Link"
            />
          </a>
        </li>
        <li>
          <a href={contactsData.emailLink}>
            <Image
              src={contactsData.emailIconPublicPath}
              width={32}
              height={32}
              alt="Email"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
