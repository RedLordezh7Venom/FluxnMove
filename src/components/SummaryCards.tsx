import React from 'react';
import { TrendingUp, ArrowRightLeft, DollarSign, Activity } from 'lucide-react';

const SummaryCard = ({ title, value, icon: Icon, trend }: { title: string; value: string; icon: any; trend?: string }) => (
  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
        {trend && <p className="text-green-400 text-sm mt-2">{trend}</p>}
      </div>
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
  </div>
);

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SummaryCard
        title="Total Opportunities"
        value="1,234"
        icon={ArrowRightLeft}
        trend="+12.5% from last week"
      />
      <SummaryCard
        title="Total Trades"
        value="856"
        icon={Activity}
        trend="+5.3% from last week"
      />
      <SummaryCard
        title="Total Profit"
        value="$45,678"
        icon={DollarSign}
        trend="+8.7% from last week"
      />
      <SummaryCard
        title="Active Opportunities"
        value="23"
        icon={TrendingUp}
      />
    </div>
  );
}

export default SummaryCards;