import React from 'react';
import styled from 'styled-components';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #202020;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #121212;
  border: 1px solid #303030;
  border-radius: 20px;
  padding: 5px 15px;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #888888;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #383838;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <IconWrapper>
          <FaBars size={24} color="#e0e0e0" />
        </IconWrapper>
      </LeftSection>
      <CenterSection>
        <SearchBarContainer>
          <SearchInput placeholder="Search" />
          <IconWrapper>
            <FaSearch size={20} color="#e0e0e0" />
          </IconWrapper>
        </SearchBarContainer>
      </CenterSection>
      <RightSection>
        <IconWrapper>
          <FaUserCircle size={32} color="#e0e0e0" />
        </IconWrapper>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;