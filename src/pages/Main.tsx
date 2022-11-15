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
      <MainPageContainer>
        <MainTitleBox>
          <MainTitle>포트폴리오.</MainTitle>
          <SubText>
            기술향상과 새로운 스택 학습을 위한 노력의 흔적들입니다.
          </SubText>
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
                  <SeeDetail onClick={() => handleMoveToDetail(portfolio)}>
                    자세히보기
                  </SeeDetail>
                </ContentWrapper>
              </PortfolioWrapper>
            );
          })}
        </GridContainer>
      </MainPageContainer>
    </Layout>
  );
}

const MainPageContainer = styled(FlexColumnDiv)`
  width: 1000px;
  padding: 20px 0px 40px 0px;
`;
const MainTitleBox = styled.div`
  padding-left: 20px;
  margin-bottom: 28px;
`;
const MainTitle = styled.span`
  font-size: 25px;
  font-weight: 800;
  border-bottom: 4px solid black;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 3px;
`;
const SubText = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: #434343;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  padding: 0px 50px;
  gap: 30px;
`;
const PortfolioWrapper = styled(FlexColumnDiv)`
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 25px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
`;
const Thumbnail = styled.img`
  width: 245px;
  height: 144px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translateY(-10px);
  }
`;
const ContentWrapper = styled(FlexColumnDiv)`
  width: 230px;
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
  height: 70px;
  border-bottom: 1px solid #e8e8e8;
`;
const SeeDetail = styled.div`
  font-size: 12px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
