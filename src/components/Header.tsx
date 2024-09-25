import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mediaQuery } from "../styles/global.style";
import { FlexColumnDiv, FlexDiv } from "../styles/utility.style";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ProfileImage onClick={() => navigate("/")} />
      <InfoWrapper>
        <MainTitle>안녕하세요. 프론트엔드 개발자 이민형입니다😃</MainTitle>
        <ProfileInfo>
          <IntroduceText>
            창의적 사고와 혁신을 통해 다양한 문제를 해결하고 세상에 긍정적인
            영향을 끼치는 개발자가 되고 싶습니다.
          </IntroduceText>
          <IconWrapper>
            <Icon
              className="github"
              src={"/assets/svg/github-icon.svg"}
              onClick={() => window.open("https://github.com/outclassstudio")}
            />
            <Icon
              className="velog"
              src={
                "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c539f924-d53a-4a30-f0c6-9b5b71cd7500/width=20,height=20"
              }
              onClick={() => window.open("https://velog.io/@outclassstudio")}
            />
          </IconWrapper>
        </ProfileInfo>
      </InfoWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(FlexDiv)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 0px 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 40px 30px;
  width: calc(100vw - 60px);
  gap: 10px;

  ${mediaQuery.mobile} {
    padding: 20px 15px;
    width: calc(100vw - 30px);
  }
`;
const ProfileImage = styled.div`
  width: 200px;
  height: 150px;
  background-image: url("https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/38f12bf2-7ae7-42ce-7e67-240c1a084a00/width=400,height=300");
  background-size: cover;
  background-position: center;
  border: 5px solid white;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 5px;
  aspect-ratio: 4/3;
  cursor: pointer;

  ${mediaQuery.pad} {
    width: 160px;
    height: 120px;
  }

  ${mediaQuery.mobile} {
    width: 120px;
    height: 90px;
  }
`;
const InfoWrapper = styled(FlexColumnDiv)`
  margin-left: 30px;

  ${mediaQuery.mobile} {
    margin-left: 10px;
  }
`;
const MainTitle = styled(FlexDiv)`
  justify-content: left;
  font-size: 30px;
  font-weight: bold;

  ${mediaQuery.middle} {
    font-size: 22px;
  }

  ${mediaQuery.mobile} {
    font-size: 18px;
  }
`;
const ProfileInfo = styled(FlexColumnDiv)``;
const IntroduceText = styled(FlexDiv)`
  max-width: 600px;
  margin-top: 5px;
  padding-left: 2px;
  color: #4a4a4a;
  white-space: pre-wrap;

  ${mediaQuery.middle} {
    font-size: 12px;
  }

  ${mediaQuery.mobile} {
    font-size: 10px;
  }
`;
const IconWrapper = styled(FlexDiv)`
  align-items: center;
  padding: 10px 3px;
  gap: 5px;
`;
const Icon = styled.img`
  width: 25px;
  cursor: pointer;

  &.github {
    width: 23px;
  }
  &.velog {
    border-radius: 50%;
  }

  ${mediaQuery.mobile} {
    width: 20px;

    &.github {
      width: 18px;
    }
  }
`;
