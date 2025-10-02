import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #1f1f3d;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #3a3a5a;

  &:last-child {
    border-bottom: none;
  }
`;

const HeaderRow = styled(Row)`
  color: #a0a0a0;
  font-weight: 300;
  padding-bottom: 10px;
  border-bottom: 2px solid #3a3a5a;
`;

const Cell = styled.div`
  font-size: 14px;
  color: #e0e0e0;
`;

const HeaderCell = styled(Cell)`
    color: #a0a0a0;
`;

const UpcomingPayments = ({ payments }) => {
  return (
    <Container>
      <Title>Upcoming Payments</Title>
      <Table>
        <HeaderRow>
          <HeaderCell>Subscription</HeaderCell>
          <HeaderCell>Next Payment</HeaderCell>
        </HeaderRow>
        {payments.map((payment, index) => (
          <Row key={index}>
            <Cell>{payment.name}</Cell>
            <Cell>{payment.date}</Cell>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default UpcomingPayments;