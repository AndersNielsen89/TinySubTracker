import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SpendingCard from './components/SpendingCard';
import MonthCard from './components/MonthCard';
import UpcomingPayments from './components/UpcomingPayments';
import { monthlySpending, annualSpending, yearlyView, upcomingPayments } from './data';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 40px;
`;

const RightColumn = styled.div`
  width: 320px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const SectionSubtitle = styled.p`
  color: #a0a0a0;
  margin-top: 0;
  margin-bottom: 30px;
`;

const SpendingContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const YearlyViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <LeftColumn>
          <SectionTitle>Subscriptions</SectionTitle>
          <SectionSubtitle>Manage your recurring payments</SectionSubtitle>
          <SpendingContainer>
            <SpendingCard title="Monthly Spending" amount={monthlySpending.toFixed(2)} />
            <SpendingCard title="Annual Spending" amount={annualSpending.toFixed(2)} />
          </SpendingContainer>
          <SectionTitle>Yearly View</SectionTitle>
          <YearlyViewContainer>
            {yearlyView.map(item => (
              <MonthCard key={item.month} month={item.month} amount={item.amount} />
            ))}
          </YearlyViewContainer>
        </LeftColumn>
        <RightColumn>
          <UpcomingPayments payments={upcomingPayments} />
        </RightColumn>
      </MainContent>
    </AppContainer>
  );
}

export default App;