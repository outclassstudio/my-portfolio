import { useRecoilState } from "recoil";
import styled from "styled-components";
import { portfolioState } from "../recoil/State";
import {
  FlexColumnDiv,
  FlexColumnDivCentered,
  FlexDiv
} from "../styles/utility.style";
import Layout from "./Layout";

export default function Detail() {
  const [portfolio, setPortfolio] = useRecoilState(portfolioState);

  return (
    <Layout>
      <PortfolioWrapper>
        <TitleBox>
          <Title>{portfolio.title}</Title>
        </TitleBox>
        <Thumbnail
          src={portfolio.thumbnail}
          onClick={() => window.open(portfolio.homepage)}
        />
        <ContentWrapper>
          <Description>{portfolio.description}</Description>
          <SkillsWrapper>
            <NameTag>🌈Skills</NameTag>
            <SkillsSubWrapper> 
              <Category>- frontend:</Category>
              {portfolio?.skills.frontend.map((skill: any, idx: number) => (
                <Skill className="frontend" key={idx}>{skill}</Skill>
              ))}
            </SkillsSubWrapper>
            {portfolio?.skills.backend.length > 0 &&             
              <SkillsSubWrapper> 
                <Category>- backend:</Category>
                {portfolio?.skills.backend.map((skill: any, idx: number) => (
                  <Skill className="backend" key={idx}>{skill}</Skill>
                ))}
              </SkillsSubWrapper>
            }
          </SkillsWrapper>
          <Homepage onClick={() => window.open(portfolio.homepage)}>
            🔗바로가기
          </Homepage>
        </ContentWrapper>
      </PortfolioWrapper>
    </Layout>
  );
}

const PortfolioWrapper = styled(FlexColumnDivCentered)`
  width: 600px;
  background: white;
  padding: 25px 65px 35px 65px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
`;
const Thumbnail = styled.img`
  width: 600px;
  cursor: pointer;
`;
const ContentWrapper = styled(FlexColumnDiv)`
  width: 100%;
  padding-left: 32px;
  gap: 10px;
`;
const TitleBox = styled(FlexDiv)`
  padding-left: 30px;
  width: 100%;
  justify-content: left;
  margin-bottom: 10px;
`;
const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;
const SkillsWrapper = styled(FlexColumnDiv)`
  align-items: start;
  white-space: pre;
  gap: 5px;
`;
const SkillsSubWrapper = styled(FlexDiv)`
  padding-left: 5px;
  align-items: center;
`
const Category = styled.span`
  font-size: 14px;
  color: #383838;
  margin-right: 7px;
`
const NameTag = styled.span`
  font-weight: bold;
  color: #383838;
  margin-bottom: 3px;
`;
const Description = styled.div`
  word-break: break-all;
  color: #5e5e5e;
  font-size: 17px;
`;
const Skill = styled.span`
  font-size: 11px;
  color: white;
  background-color: #5e5e5e;
  padding: 5px;
  border-radius: 3px;
  margin-right: 3px;

  &.frontend {
    background-color: #2178ae;
  }
  &.backend {
    background-color: #ffc400;
  }
`;
const Homepage = styled.div`
  font-weight: bold;
  color: #383838;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
