import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginSuccess = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <StyledTitle>9oormthonUNIV_4th_UOU</StyledTitle>
      <FlexButtonBox>
        <GreyButton onClick={() => navigate('/project')}>Project</GreyButton>
        <GreyButton onClick={() => navigate('/study')}>Study</GreyButton>
        <GreyButton onClick={() => navigate('/community')}>Community</GreyButton>
      </FlexButtonBox>
    </Wrapper>
  );
};

export default LoginSuccess;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const StyledTitle = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: 'dlig' on;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
`;

const FlexButtonBox = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 80px;

  flex-wrap: wrap;
`;

const GreyButton = styled.button`
  width: 300px;
  height: 150px;
  border: none;
  border-radius: 50px;
  background: #d9d9d9;
  box-shadow: 10px 10px 30px 0px #f7fafc inset, 0px 0px 50px 0px rgba(0, 0, 0, 0.25) inset;
  transition: all 0.5s ease;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    background: #d9d9ff;
  }
`;
