import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import { portfolioState } from "../recoil/State";
import { FlexColumnDiv } from "../styles/utility.style";
import Layout from "./Layout";

export default function Main() {
  const navigate = useNavigate();
  const setPortfolioState = useSetRecoilState(portfolioState);

  const addPortfolio = (portfoilo: any) => {
    setPortfolioState(portfoilo);
  };

  const handleMoveToDetail = (portfolio: any) => {
    navigate(`/detail/${portfolio.id}`);
    addPortfolio(portfolio);
  };

  return (
    <Layout>
      <MainTitleBox>
        <MainTitle>포트폴리오.</MainTitle>
        <SubText>저의 개인 포트폴리오 작업물들입니다.</SubText>
      </MainTitleBox>
      <GridContainer>
        {portfolios.map((portfolio, idx) => {
          return (
            <PortfolioWrapper key={idx}>
              <Thumbnail
                src={portfolio.thumbnail}
                onClick={() => window.open(portfolio.homepage)}
              />
              <ContentWrapper>
                <TitleBox>
                  <Title onClick={() => handleMoveToDetail(portfolio)}>
                    {portfolio.title}
                  </Title>
                </TitleBox>
                <Description>{portfolio.description}</Description>
                {/* <SkillsWrapper>
                  {portfolio.skills.frontend.map((skill, idx) => (
                    <Skill key={idx}>{skill}</Skill>
                  ))}
                </SkillsWrapper> */}
                <SeeDetail onClick={() => handleMoveToDetail(portfolio)}>
                  자세히보기
                </SeeDetail>
              </ContentWrapper>
            </PortfolioWrapper>
          );
        })}
      </GridContainer>
    </Layout>
  );
}

const MainTitleBox = styled.div`
  padding-left: 50px;
  margin-bottom: 30px;
`;
const MainTitle = styled.span`
  font-size: 25px;
  font-weight: 800;
  border-bottom: 4px solid black;
`;
const SubText = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: #434343;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0px 50px;
  gap: 17px;
`;
const PortfolioWrapper = styled.div`
  height: 200px;
  display: flex;
  gap: 15px;
`;
const Thumbnail = styled.img`
  width: 272px;
  height: 160px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translateY(-10px);
  }
`;
const ContentWrapper = styled(FlexColumnDiv)`
  width: 200px;
  gap: 10px;
`;
const TitleBox = styled.div``;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid black;
  cursor: pointer;

  :hover {
    color: #7510da;
    border-bottom: 2px solid #7510da;
  }
`;
const Description = styled.div`
  font-size: 14px;
  height: 85px;
`;
const SkillsWrapper = styled.div`
  height: 100%;
  /* display: flex; */
  white-space: pre;
  line-height: 27px;
`;
const Skill = styled.span`
  font-size: 11px;
  color: white;
  background-color: #949494;
  padding: 5px;
  border-radius: 3px;
  margin-right: 3px;
`;
const SeeDetail = styled.div`
  font-size: 12px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
