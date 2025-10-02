import React from 'react';
import styled from 'styled-components';
import {
  FaTint, FaBolt, FaCloud, FaMusic,
  FaLeaf, FaBook, FaArchive, FaCamera,
  FaPen, FaBox, FaGraduationCap
} from 'react-icons/fa';

const Card = styled.div`
  background-color: #2a2a4a;
  padding: 20px;
  border-radius: 10px;
  width: 160px;
  margin: 10px;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  margin-bottom: 15px;
  color: #a0a0a0;
`;

const MonthName = styled.h4`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const Amount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #a0a0a0;
`;

const icons = {
  January: FaTint,
  February: FaBolt,
  March: FaCloud,
  April: FaMusic,
  May: FaLeaf,
  June: FaBook,
  July: FaArchive,
  August: FaCamera,
  September: FaPen,
  October: FaBox,
  November: FaBox,
  December: FaGraduationCap,
};

const MonthCard = ({ month, amount }) => {
  const IconComponent = icons[month];
  return (
    <Card>
      <IconWrapper>
        {IconComponent && <IconComponent size={24} />}
      </IconWrapper>
      <MonthName>{month}</MonthName>
      <Amount>${amount}</Amount>
    </Card>
  );
};

export default MonthCard;