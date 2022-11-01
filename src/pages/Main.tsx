import styled from "styled-components";
import Layout from "./Layout";

const portfolios = [
  {
    id: 1,
    title: "너에게 닿기를",
    description:
      "특별한 날, 소중한 사람과 함께 선물을 주고 받으며 마음을 나눌 수 있는 웹앱입니다.",
    homepage: "https://reachtoyou.vercel.app/",
    githubClient: "https://github.com/outclassstudio/rty-renew-client",
    githubServer: "https://github.com/outclassstudio/rty-renew-server",
    thumbnail: "",
  },
  {
    id: 2,
    title: "불난데부채질 홈페이지",
    description:
      "이전의 비영리단체 활동에 대한 기록을 남기기 위한 목적 및 스킬 향상을 위해 진행한 사이드 프로젝트입니다.",
    homepage: "https://bulnande.vercel.app/",
    githubClient: "https://github.com/outclassstudio/bulnande-portfolio",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Schedule24/7",
    description:
      "스케줄을 수동으로 짜는 것에 대한 불편함에 착안하여 개발한 조건에 맞는 스케줄을 자동으로 생성해주는 웹앱입니다.",
    homepage: "https://schedule24-7.link/",
    githubClient: "https://github.com/codestates/Schedule24-7",
    thumbnail: "",
  },
  {
    id: 4,
    title: "아웃클라쓰 블로그",
    description: "Next.js 학습을 위해 만든 페이지입니다",
    homepage: "https://outclass-blog.vercel.app/",
    githubClient: "https://github.com/outclassstudio/OutclassBlog",
    thumbnail: "",
  },
  {
    id: 5,
    title: "TodoList",
    description: "Vue학습을 위해 만든 페이지입니다",
    homepage: "https://todo-vue-plum.vercel.app/",
    githubClient: "https://github.com/outclassstudio/todo-vue",
    thumbnail: "",
  },
];

export default function Main() {
  return (
    <Layout>
      <GridContainer>
        {portfolios.map((portfolio, idx) => {
          return (
            <PortfolioWrapper>
              <div key={idx}>{portfolio.title}</div>
              <div>{portfolio.description}</div>
            </PortfolioWrapper>
          );
        })}
      </GridContainer>
    </Layout>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const PortfolioWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
`;
