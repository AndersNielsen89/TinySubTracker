import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Card = styled.div`
  background-color: #2a2a4a;
  padding: 20px;
  border-radius: 10px;
  width: 160px;
  margin: 10px;
  box-sizing: border-box;
`;

const MonthName = styled.h4`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const Amount = styled.p`
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #a0a0a0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const MonthCard = ({ month, amount, subscriptions }) => {
  return (
    <Card>
      <MonthName>{month}</MonthName>
      <Amount>${amount}</Amount>
      <IconContainer>
        {subscriptions && subscriptions.map((sub, index) => (
          <IconWrapper key={index}>
            <Icon name={sub.icon} />
          </IconWrapper>
        ))}
      </IconContainer>
    </Card>
  );
};

export default MonthCard;