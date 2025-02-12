import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      // {
      //   title: "Dart",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/dart.svg",
      // },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
    
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
    ],
  },
  // {
  //   title: "Backend Development",
  //   items: [
  //     {
  //       title: "Node.js",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/nodejs.svg",
  //     },
  //     {
  //       title: "Express.js",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/express.svg",
  //     },
  //     {
  //       title: "Socket.io",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/socket-io.png",
  //     },
  //     // {
  //     //   title: "Nest.js",
  //     //   level: SkillLevel.Beginner,
  //     //   icon: "/skills/nestjs.svg",
  //     // },
  //   ],
  // },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "React Native",
        level: SkillLevel.Intermediate,
        icon: "/skills/flutter.svg",
      },
      // {
      //   title: "GetX",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/getx.png",
      // },
    ],
  },
  {
    title: "Database Management",
    items: [
      // {
      //   title: "MongoDB",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/mongodb.svg",
      // },
      {
        title: "PostgreSQL",
        level: SkillLevel.Beginner,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  // {
  //   title: "DevOps/VCS",
  //   items: [
  //     {
  //       title: "Docker",
  //       level: SkillLevel.Beginner,
  //       icon: "/skills/docker.png",
  //     },
  //     {
  //       title: "AWS",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/aws.svg",
  //     },
  //     {
  //       title: "Git",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/git.svg",
  //     },
  //     {
  //       title: "GitHub",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/github.svg",
  //     },
  //   ],
  // },
  // {
  //   title: "Miscellaneous",
  //   items: [
  //     {
  //       title: "Firebase",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/firebase.svg",
  //     },
  //     {
  //       title: "Ubuntu",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/ubuntu.png",
  //     },
  //   ],
  // },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Intermediate,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Intermediate,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Intermediate,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
