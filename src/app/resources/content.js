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
<<<<<<< HEAD
    name: "geis.joris@gmail.com",
    icon: "email",
    link: "/about",
=======
    name: "Email",
    icon: "email",
    link: "geis.joris@gmail.com",
>>>>>>> 1a724b4 (portfolio)
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Developer</>,
  subline: (
    <>
      Ich bin Joris, ein Frontend-Entwickler aus Deutschland. <br />
      Ich befinde mich zwar noch in der Anfangsphase meiner Karriere,
      <br /> kann aber kaum warten richtig durchzustarten.
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
        Ich bin angehender Fullstack Entwickler mit Erfahrungen in Nextjs,
        React, Tailwind, MongoDB, REST API. Ich liebe es mich stetig
        weiterzuentwickeln und neue Technologien zu lernen, weshalb ich auch
<<<<<<< HEAD
        immer auf der Suche nach neuen Herausforderungen bin.
=======
        immer auf der Suche nach neuen Herausforderungen bin. Am Ende kommt es
        aber darauf an, ob ich euch überzeugen kann. Schaut euch also gerne
        meine Projekte an und schreibt mir gerne bei Interesse.
>>>>>>> 1a724b4 (portfolio)
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
            Hier habe ich meine ersten Erfahrungen als Frontend Entwickler
            sammeln können. Hier konnte ich endlich den Sprung von den
            Grundlagen wie HTML, CSS und JavaScript zu modernen Frameworks wie
            React und Next.js machen.
          </>,
          <>
            Leider war es nur ein Schülerjob, aber ich konnte hier schon einiges
            lernen und bin bereit für die nächste Herausforderung.
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
        title: "Microsoft Office",
        description: (
          <>
            Durch Kurse, unteranderem aus der Schule kann ich mit jeglichen
            Office Programmen umgehen und diese bedienen.
          </>
        ),
        images: [],
      },
      {
        title: "Computer Erfahrungen",
        description: (
          <>
            Seit ich 10 Jahre alt bin, sitze ich täglich am Computer und bin
            daran gewöhnt mehrere Stunden täglich am PC zu verbringen.
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
