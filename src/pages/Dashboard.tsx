import React from 'react';
import SummaryCards from '../components/SummaryCards';
import RecentTrades from '../components/RecentTrades';
import ProfitChart from '../components/ProfitChart';

function Dashboard() {
  return (
    <>
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RecentTrades />
        <ProfitChart />
      </div>
    </>
  );
}

export default Dashboard;