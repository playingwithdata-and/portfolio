import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andre",
  lastName: "Afrillian",
  name: `Andre Afrillian`,
  role: "Data & Business Analyst",
  avatar: "/images/avatar.jpg",
  email: "andre@example.com",
  location: "Asia/Kuala_Lumpur",
  languages: ["English", "Bahasa Indonesia"],
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/andreafrillian",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Data & Business Analyst`,
  description: `Portfolio of ${person.name}, ${person.role} at Accenture. SQL, Tableau, Power BI, Excel.`,
  headline: <>Turning platform metrics into business decisions</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Data &amp; Business Analyst at{" "}
      <Text as="span" size="xl" weight="strong">Accenture</Text> in Kuala Lumpur.
      <br />Four years of turning social media numbers into strategy.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Kuala Lumpur`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I didn&apos;t plan to end up in data. Studied business in Malaysia and economics
        in Indonesia, figured I&apos;d go into marketing. Then an internship at a cement
        factory — of all places — got me hooked on pulling apart spreadsheets.
        <br /><br />
        Now I&apos;m at Accenture in Kuala Lumpur, tracking social media trends and user
        behavior, delivering insights that actually change how clients spend their budgets.
        Before that, three years at a consulting firm in Jakarta doing the same thing —
        just with less sleep and more coffee.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        timeframe: "Mar 2025 – Present",
        role: "Analyst",
        achievements: [
          <>
            Track social media trends and user behavior — deliver insights clients 
            actually use to grow their digital presence.
          </>,
          <>
            Content moderation and policy enforcement to protect brand safety 
            across platforms.
          </>,
          <>
            Strategic advisory on digital presence growth using data-driven insights.
          </>,
        ],
        images: [],
      },
      {
        company: "Cakrawala Nusantara Consulting",
        timeframe: "Mar 2022 – Feb 2025",
        role: "Social Media Analyst",
        achievements: [
          <>
            Built analytics workflows from scratch for consulting clients across 
            multiple industries.
          </>,
          <>
            Analyzed content performance and audience engagement, delivering 
            actionable insights that shaped campaign strategy.
          </>,
        ],
        images: [],
      },
      {
        company: "PT Semen Padang",
        timeframe: "Jun – Aug 2021",
        role: "Operations Intern",
        achievements: [
          <>
            Cross-departmental data analysis with Excel, SQL, Tableau, and Power BI.
            The internship that started it all.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universiti Utara Malaysia",
        description: <>BBA — Business Administration (2019–2021)</>,
      },
      {
        name: "Universitas Negeri Padang",
        description: <>Sarjana Ekonomi — Marketing Management (2017–2021)</>,
      },
      {
        name: "Harisenin Bootcamp",
        description: <>Digital Marketing (In Progress)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Excel",
        description: (
          <>Pivot Tables, Power Query, XLOOKUP, dashboards, data modeling.</>
        ),
        tags: [
          { name: "Excel", icon: "spreadsheet" },
        ],
        images: [],
      },
      {
        title: "SQL",
        description: (
          <>Data extraction, cleaning, joins, CTEs, window functions.</>
        ),
        tags: [
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Tableau & Power BI",
        description: (
          <>Interactive dashboards, data storytelling, DAX, LOD expressions.</>
        ),
        tags: [
          { name: "Tableau", icon: "chart" },
          { name: "Power BI", icon: "chart" },
        ],
        images: [],
      },
      {
        title: "Analytics & Strategy",
        description: (
          <>Google Analytics, Looker Studio, A/B testing, campaign analytics, 
          sentiment analysis, trend forecasting.</>
        ),
        tags: [
          { name: "Analytics", icon: "analytics" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on data & strategy",
  description: `Thoughts on analytics, marketing, and business intelligence`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data analysis projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: ``,
  description: ``,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
