import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
  background-color: #ffffff;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeBadge = styled.div`
  background: #e5e1f9;
  color: #666;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const MenuItem = styled.div`
  font-size: 12px;
  color: #222;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  font-size: 20px;
`;

export const Title = styled.h1`
  margin-top: 150px;
  font-size: 28px;
  font-weight: 800;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 40px;
`;

export const NavButton = styled.button`
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  background: linear-gradient(to bottom, #eee, #ccc);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #ddd, #bbb);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>9oormthonUNIV_4th_UOU</Title>

      <ButtonContainer>
        <NavButton onClick={() => navigate('/project')}>Project</NavButton>
        <NavButton onClick={() => navigate('/study')}>Study</NavButton>
        <NavButton onClick={() => navigate('/community')}>Community</NavButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Home;
