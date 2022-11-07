import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { portfolios } from "../data/portfolio";
import { FlexColumnDiv } from "../styles/utility.style";

export default function Detail() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState<any>("");

  useEffect(() => {
    if (id) {
      const filtered = portfolios.filter((portfolio) => portfolio.id === +id);
      setPortfolio(filtered);
    }
    // console.log(portfolio, "확인");
  }, []);

  // if (!portfolio) {
  //   return <div>로딩...</div>;
  // }

  return (
    <div>
      <PortfolioWrapper>
        <Thumbnail
          src={portfolio.thumbnail}
          onClick={() => window.open(portfolio.homepage, "_blank")}
        />
        <ContentWrapper>
          <TitleBox>
            <Title>{portfolio.title}</Title>
          </TitleBox>
          <div>{portfolio.description}</div>
          <SkillsWrapper>
            {/* {portfolio?.skills.frontend.map((skill: any) => (
              <Skill>{skill}</Skill>
            ))} */}
          </SkillsWrapper>
        </ContentWrapper>
      </PortfolioWrapper>
    </div>
  );
}

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
