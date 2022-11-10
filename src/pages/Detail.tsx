import { useRecoilState } from "recoil";
import styled from "styled-components";
import { portfolioState } from "../recoil/State";
import { FlexColumnDiv } from "../styles/utility.style";

export default function Detail() {
  const [portfolio, setPortfolio] = useRecoilState(portfolioState);

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
            {portfolio?.skills.frontend.map((skill: any, idx: number) => (
              <Skill key={idx}>{skill}</Skill>
            ))}
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
