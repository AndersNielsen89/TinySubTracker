import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #e0e0e0;
  margin: 0;
  font-weight: 300;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Subscription Tracker</Title>
      <RightSection>
        <AddButton>Add Subscription</AddButton>
        <FaUserCircle size={40} color="#e0e0e0" />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;