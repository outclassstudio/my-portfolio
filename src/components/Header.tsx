import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <ProfileImage />
      <InfoWrapper>
        <MainTitle>안녕하세요. 프론트엔드 개발자 이민형입니다😃</MainTitle>
        <ProfileInfo>github: https://github.com/outclassstudio</ProfileInfo>
      </InfoWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  /* width: 100vw; */
  /* height: 100px; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 0px 5px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 30px;
  padding: 25px 30px;
  /* background-image: url("/assets/images/my-profile.jpeg");
  background-size: cover; */
`;
const ProfileImage = styled.div`
  width: 200px;
  height: 150px;
  /* background-size: cover; */
  background-image: url("/assets/images/my-profile.jpeg");
  background-size: cover;
  border: 5px solid white;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 5px;
  /* box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 3px; */
  /* flex: 1 0 auto; */
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  margin-left: 30px;
`;
const ProfileInfo = styled.div``;
const MainTitle = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: right;
  font-size: 30px;
  font-weight: bold;
`;
