import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../asset/svg/Logo';
import ProfileImg from '../../asset/svg/ProfileImg';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ToolBar></ToolBar>
      <Outlet />
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ToolBar = () => {
  const handleGoMypage = () => {
    console.log('not yet');
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };
  const handleGoProfile = () => {
    console.log('not yet');
  };
  return (
    <>
      <ContentWrapper>
        <Logo />
        <ButtonBox>
          <StyledButton onClick={handleGoMypage}>마이페이지</StyledButton>
          <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
          <StyledButton onClick={handleGoProfile}>
            <ProfileImg />
          </StyledButton>
        </ButtonBox>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  height: fit-content;
`;
