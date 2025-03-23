import React from 'react';
import { BarChart3 } from 'lucide-react';

const ProfitChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Profit/Loss Chart</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded bg-gray-700 text-sm hover:bg-gray-600">1D</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-sm">1W</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-sm hover:bg-gray-600">1M</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-sm hover:bg-gray-600">1Y</button>
        </div>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 mx-auto mb-2" />
          <p>Chart visualization will be implemented with a charting library</p>
        </div>
      </div>
    </div>
  );
}

export default ProfitChart;