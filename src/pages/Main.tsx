import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import { portfolioState } from "../recoil/State";
import { mediaQuery } from "../styles/global.style";
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

  ${mediaQuery.pad} {
    width: 680px;
  }
  ${mediaQuery.mobile} {
    width: 100%;
  }
`;
const MainTitleBox = styled.div`
  padding-left: 20px;
  margin-bottom: 28px;

  ${mediaQuery.mobile} {
    padding-left: 10%;
    margin-bottom: 15px;
  }
`;
const MainTitle = styled.span`
  font-size: 25px;
  font-weight: 800;
  border-bottom: 4px solid black;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 3px;

  ${mediaQuery.mobile} {
    font-size: 20px;
  }
`;
const SubText = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: #434343;

  ${mediaQuery.mobile} {
    font-size: 13px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  padding: 0px 50px;
  gap: 30px;

  ${mediaQuery.pad} {
    grid-template-columns: repeat(2, 300px);
  }
  ${mediaQuery.mobile} {
    padding: 0px 10px;
    gap: 10px;
    grid-template-columns: repeat(2, 40%);
  }
`;
const PortfolioWrapper = styled(FlexColumnDiv)`
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 25px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;

  ${mediaQuery.mobile} {
    gap: 5px;
  }
`;
const Thumbnail = styled.img`
  width: 245px;
  height: 144px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translateY(-10px);
  }

  ${mediaQuery.mobile} {
    width: 147px;
    height: 86px;
  }
`;
const ContentWrapper = styled(FlexColumnDiv)`
  width: 230px;
  gap: 10px;

  ${mediaQuery.mobile} {
    width: 100%;
  }
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

  ${mediaQuery.mobile} {
    font-size: 13px;
  }
`;
const Description = styled.div`
  word-break: break-all;
  font-size: 14px;
  height: 70px;
  border-bottom: 1px solid #e8e8e8;

  ${mediaQuery.mobile} {
    height: 55px;
    font-size: 10px;
  }
`;
const SeeDetail = styled.div`
  font-size: 12px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  ${mediaQuery.mobile} {
    font-size: 10px;
  }
`;
