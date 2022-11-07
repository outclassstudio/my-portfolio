import { useNavigate } from "react-router-dom";
import { atom } from "recoil";
import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import { FlexColumnDiv, FlexDiv } from "../styles/utility.style";
import Layout from "./Layout";

const portfolioState = atom({
  key: "portfolioState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default function Main() {
  const navigate = useNavigate();
  return (
    <Layout>
      <MainTitleBox>
        <MainTitle>포트폴리오.</MainTitle>
      </MainTitleBox>
      <GridContainer>
        {portfolios.map((portfolio, idx) => {
          return (
            <PortfolioWrapper key={idx}>
              <Thumbnail
                src={portfolio.thumbnail}
                onClick={() => navigate(`/detail/${portfolio.id}`)}
              />
              <ContentWrapper>
                <TitleBox>
                  <Title>{portfolio.title}</Title>
                </TitleBox>
                {/* <div>{portfolio.description}</div> */}
                <SkillsWrapper>
                  {portfolio.skills.frontend.map((skill, idx) => (
                    <Skill key={idx}>{skill}</Skill>
                  ))}
                </SkillsWrapper>
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
  margin-bottom: 20px;
`;
const MainTitle = styled.span`
  font-size: 25px;
  font-weight: 800;
  border-bottom: 4px solid black;
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
