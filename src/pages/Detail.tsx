import { useRecoilState } from "recoil";
import styled from "styled-components";
import MarkDown from "../components/Markdown";
import { portfolioState } from "../recoil/State";
import { mediaQuery } from "../styles/global.style";
import {
  FlexColumnDiv,
  FlexColumnDivCentered,
  FlexDiv,
} from "../styles/utility.style";
import Layout from "./Layout";

export default function Detail() {
  const [portfolio, setPortfolio] = useRecoilState(portfolioState);

  return (
    <Layout>
      <DetailContainer>
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
              <Category>- frontend:</Category>
              <SkillsSubWrapper>
                {portfolio?.skills.frontend.map((skill: any, idx: number) => (
                  <Skill className="frontend" key={idx}>
                    {skill}
                  </Skill>
                ))}
              </SkillsSubWrapper>
              {portfolio?.skills.backend.length > 0 && (
                <>
                  <Category>- backend:</Category>
                  <SkillsSubWrapper>
                    {portfolio?.skills.backend.map(
                      (skill: any, idx: number) => (
                        <Skill className="backend" key={idx}>
                          {skill}
                        </Skill>
                      )
                    )}
                  </SkillsSubWrapper>
                </>
              )}
            </SkillsWrapper>
            <LinkWrapper>
              <Homepage onClick={() => window.open(portfolio.homepage)}>
                🔗배포링크
              </Homepage>
              {portfolio.githubServer ? (
                <>
                  <Homepage onClick={() => window.open(portfolio.githubClient)}>
                    🔗github(client)
                  </Homepage>
                  <Homepage onClick={() => window.open(portfolio.githubServer)}>
                    🔗github(server)
                  </Homepage>
                </>
              ) : (
                <Homepage onClick={() => window.open(portfolio.githubClient)}>
                  🔗github
                </Homepage>
              )}
            </LinkWrapper>
          </ContentWrapper>
        </PortfolioWrapper>
        <PortfolioWrapper className="tmi">
          <TitleBox>
            <Title>프로젝트 TMI</Title>
          </TitleBox>
          <MarkDownWrapper>
            <MarkDown markdown={portfolio.tmi} />
          </MarkDownWrapper>
        </PortfolioWrapper>
      </DetailContainer>
    </Layout>
  );
}

const DetailContainer = styled(FlexColumnDivCentered)``;

const PortfolioWrapper = styled(FlexColumnDivCentered)`
  width: 600px;
  background: white;
  padding: 25px 65px 35px 65px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;

  &.tmi {
    /* padding-left: 85px; */
    /* line-height: 15px; */
  }

  ${mediaQuery.mobile} {
    width: 350px;
    padding: 30px 0px;
    margin-bottom: 20px;
  }
`;
const Thumbnail = styled.img`
  width: 600px;
  cursor: pointer;

  ${mediaQuery.mobile} {
    width: 80%;
  }
`;
const ContentWrapper = styled(FlexColumnDiv)`
  width: 100%;
  padding-left: 32px;
  gap: 10px;

  ${mediaQuery.mobile} {
    padding-left: 10px;
    width: 80%;
  }
`;
const TitleBox = styled(FlexDiv)`
  padding-left: 30px;
  width: 100%;
  justify-content: left;
  margin-bottom: 10px;

  ${mediaQuery.mobile} {
    padding-left: 15px;
    width: 80%;
  }
`;
const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid black;

  ${mediaQuery.mobile} {
    font-size: 16px;
  }
`;
const SkillsWrapper = styled(FlexColumnDiv)`
  align-items: start;
  white-space: pre;
  gap: 5px;
`;
const SkillsSubWrapper = styled(FlexDiv)`
  padding-left: 5px;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px 0px;
`;
const Category = styled.span`
  font-size: 14px;
  color: #383838;
  margin-right: 7px;

  ${mediaQuery.mobile} {
    font-size: 11px;
  }
`;
const NameTag = styled.span`
  font-weight: bold;
  color: #383838;
  margin-bottom: 3px;

  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;
const Description = styled.div`
  word-break: break-all;
  color: #5e5e5e;
  font-size: 17px;

  ${mediaQuery.mobile} {
    width: 97%;
    font-size: 11px;
  }
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

  ${mediaQuery.mobile} {
    padding: 3px;
    border-radius: 2px;
    margin-right: 2px;
    font-size: 10px;
  }
`;
const LinkWrapper = styled(FlexDiv)`
  gap: 7px;

  ${mediaQuery.mobile} {
    gap: 4px;
  }
`;
const Homepage = styled.div`
  font-weight: bold;
  color: #383838;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  ${mediaQuery.mobile} {
    font-size: 12px;
  }
`;
const MarkDownWrapper = styled(FlexDiv)`
  width: 100%;
  justify-content: left;
  padding-left: 30px;
`;
