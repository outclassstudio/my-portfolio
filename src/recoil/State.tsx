import { atom } from "recoil";

export const portfolioState = atom({
  key: "portfolioState",
  default: {
    id: 1,
    title: "너에게 닿기를",
    description:
      "특별한 날, 소중한 사람과 함께 선물을 주고 받으며 마음을 나눌 수 있는 웹앱입니다.",
    homepage: "https://reachtoyou.vercel.app/",
    githubClient: "https://github.com/outclassstudio/rty-renew-client",
    githubServer: "https://github.com/outclassstudio/rty-renew-server",
    thumbnail: "/assets/images/reachtoyou.png",
    skills: {
      frontend: [
        "Typescript",
        "React",
        "Redux",
        "Redux-Toolkit",
        "Styled-Components",
      ],
      backend: ["NodeJS", "NestJS", "TypeORM"],
    },
    tmi: `## 💡프로젝트에 새롭게 시도한 것`
  },
});
