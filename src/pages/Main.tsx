import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import { FlexColumnDiv } from "../styles/utility.style";
import Layout from "./Layout";

export default function Main() {
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
                onClick={() => window.open(portfolio.homepage, "_blank")}
              />
              <ContentWrapper>
                <TitleBox>
                  <Title>{portfolio.title}</Title>
                </TitleBox>
                <div>{portfolio.description}</div>
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
