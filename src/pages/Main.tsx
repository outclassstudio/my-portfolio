import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import Layout from "./Layout";

export default function Main() {
  return (
    <Layout>
      <GridContainer>
        {portfolios.map((portfolio, idx) => {
          return (
            <PortfolioWrapper key={idx}>
              <Thumbnail src={portfolio.thumbnail} />
              <ContentWrapper>
                <div>{portfolio.title}</div>
                <div>{portfolio.description}</div>
              </ContentWrapper>
            </PortfolioWrapper>
          );
        })}
      </GridContainer>
    </Layout>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const PortfolioWrapper = styled.div`
  height: 200px;
  display: flex;
`;
const Thumbnail = styled.img``;
const ContentWrapper = styled.div``;
