import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../asset/svg/Logo';
import ProfileImg from '../../asset/svg/ProfileImg';
import axios from 'axios';
const MainLayout = () => {
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

// 상단 바
const ToolBar = () => {
  // 마이페이지 버튼
  const handleGoMypage = () => {
    console.log('not yet');
  };

  // 로그아웃 버튼
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('로그아웃 성공');

      // 로컬스토리지 제거
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_email');
      localStorage.removeItem('user_name');

      // 새로고침으로 전체 상태 초기화
      window.location.href = '/';
    } catch (err) {
      console.error('로그아웃 실패:', err);
      alert('로그아웃 실패. 다시 시도해 주세요.');
    }
  };

  // 프로필사진 버튼
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
