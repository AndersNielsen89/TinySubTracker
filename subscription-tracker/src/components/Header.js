import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaBars, FaSearch } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  background: linear-gradient(135deg, #1f1f3d 0%, #181830 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #f0f0f5;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`;

const Subtitle = styled.span`
  font-size: 13px;
  color: rgba(224, 224, 224, 0.7);
  margin-top: 4px;
`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 40px;
`;

const SearchWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(32, 32, 64, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: rgba(111, 106, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(111, 106, 255, 0.15);
  }
`;

const SearchIcon = styled(FaSearch)`
  color: rgba(224, 224, 224, 0.65);
  margin-right: 12px;
  font-size: 14px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 44px;
  border: none;
  background: transparent;
  color: #f5f5f8;
  font-size: 15px;

  &::placeholder {
    color: rgba(224, 224, 224, 0.45);
  }

  &:focus {
    outline: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #6f6aff 0%, #9f7bff 100%);
  color: #ffffff;
  border: none;
  padding: 12px 26px;
  border-radius: 14px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  box-shadow: 0 8px 18px rgba(111, 106, 255, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(111, 106, 255, 0.45);
  }
`;

const AvatarWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <IconButton aria-label="Open navigation menu">
          <FaBars size={18} />
        </IconButton>
        <TitleGroup>
          <Title>Subscription Tracker</Title>
          <Subtitle>Monitor &amp; optimize your recurring spend</Subtitle>
        </TitleGroup>
      </LeftSection>
      <CenterSection>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput type="search" placeholder="Search subscriptions, categories, or tags" />
        </SearchWrapper>
      </CenterSection>
      <RightSection>
        <AddButton>Add Subscription</AddButton>
        <AvatarWrapper>
          <FaUserCircle size={28} color="#f0f0f5" />
        </AvatarWrapper>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
