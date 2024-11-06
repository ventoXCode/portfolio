import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Joris",
  lastName: "Geis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Deutsch", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ventoXCode",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "geis.joris@gmail.com",
    icon: "email",
    link: "/about",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Developer</>,
  subline: (
    <>
      Ich bin Joris, ein Frontend-Entwickler aus Deutschland <br /> und kann es
      kaum erwarten richtig durchzustarten. <br />
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Als angehender Fullstack-Entwickler bringe ich fundierte Erfahrungen in
        modernen Webtechnologien mit. Mein technisches Repertoire umfasst
        Next.js und React für die Entwicklung dynamischer Benutzeroberflächen,
        Tailwind CSS für stilvolles und responsives Design, sowie MongoDB und
        REST APIs für leistungsstarke Backend-Lösungen.
        <br />
        <br />
        Die Technologiewelt entwickelt sich ständig weiter - und genau das
        begeistert mich. Mit Leidenschaft bleibe ich am Puls der Zeit und
        erweitere kontinuierlich meine Fähigkeiten. Diese Neugier und der Drang
        nach Weiterentwicklung treiben mich an, stets neue Herausforderungen zu
        suchen und innovative Lösungen zu entwickeln.
        <br />
        <br />
        Überzeugen Sie sich selbst von meinen Fähigkeiten und werfen Sie einen
        Blick auf meine Projekte. Sie werden sehen, wie ich Technologien
        einsetze, um kreative und effiziente Lösungen zu schaffen. Bei Interesse
        an einer Zusammenarbeit freue ich mich sehr über Ihre Kontaktaufnahme.
        Lassen Sie uns gemeinsam Ihre Visionen in die Realität umsetzen.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "buildnext GmbH",
        timeframe: "Januar 2023 - Oktober 2023",
        role: "Schülerjob als Frontend Entwickler",
        achievements: [
          <>
            Während meiner Zeit als Frontend-Entwickler konnte ich meine
            Fähigkeiten entscheidend ausbauen und den wichtigen Schritt von den
            fundamentalen Webtechnologien zu fortgeschrittenen
            Entwicklungsumgebungen vollziehen. Nach der sicheren Beherrschung
            der Grundlagen –<strong> HTML, CSS und JavaScript </strong>– habe
            ich mich erfolgreich in die Welt moderner Frameworks wie{" "}
            <strong>React</strong> und <strong>Next.js</strong> eingearbeitet.
            Diese Entwicklung ermöglichte es mir, komplexere und dynamischere
            Webapplikationen zu erstellen und mein Verständnis für moderne
            Webentwicklung deutlich zu vertiefen.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Schule",
    institutions: [
      {
        name: "Lothar-Meyer-Gymnasium Varel",
        description: <>12. Klasse Fachhochschulreife</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technische Fähigkeiten",
    skills: [
      {
        title: "Frameworks",
        description: (
          <>
            <strong>React</strong> und <strong>Next.js</strong> sind meine
            täglichen Begleiter in der Webentwicklung. Zusammen mit{" "}
            <strong>Tailwind CSS</strong> bilden sie meine bevorzugte
            Technologie-Kombination, die ich mit Begeisterung einsetze. Dennoch
            bleibe ich stets offen für neue Entwicklungen und Technologien.
          </>
        ),
        images: [],
      },
      {
        title: "Computer Erfahrungen",
        description: (
          <>
            Seit ich <strong>10 Jahre</strong> alt bin, sitze ich täglich am
            Computer und bin daran gewöhnt mehrere Stunden täglich am PC zu
            verbringen. Das merke ich unter anderem schon im Rücken, aber was
            kann ich mit 19 Jahren schon sagen :)
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
