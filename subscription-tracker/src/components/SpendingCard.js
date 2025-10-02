import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1f1f3d;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 250px;
  margin: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  color: #a0a0a0;
`;

const Amount = styled.p`
  margin: 10px 0 0 0;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`;

const SpendingCard = ({ title, amount }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Amount>${amount}</Amount>
    </Card>
  );
};

export default SpendingCard;