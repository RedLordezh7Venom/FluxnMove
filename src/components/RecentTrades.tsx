import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const mockTrades = [
  {
    id: 1,
    dex1: 'Uniswap',
    dex2: 'SushiSwap',
    pair: 'ETH/USDT',
    amount: '2.5 ETH',
    profit: '+$123.45',
    timestamp: '2 min ago',
    status: 'completed'
  },
  {
    id: 2,
    dex1: 'PancakeSwap',
    dex2: 'Uniswap',
    pair: 'BNB/BUSD',
    amount: '10 BNB',
    profit: '+$89.32',
    timestamp: '5 min ago',
    status: 'completed'
  },
  {
    id: 3,
    dex1: 'SushiSwap',
    dex2: 'Curve',
    pair: 'USDC/DAI',
    amount: '5000 USDC',
    profit: '-$12.44',
    timestamp: '12 min ago',
    status: 'failed'
  },
];

const RecentTrades = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <h2 className="text-xl font-bold mb-4">Recent Trades</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">DEX Route</th>
              <th className="text-left pb-4">Pair</th>
              <th className="text-left pb-4">Amount</th>
              <th className="text-left pb-4">Profit/Loss</th>
              <th className="text-left pb-4">Time</th>
              <th className="text-left pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTrades.map((trade) => (
              <tr key={trade.id} className="border-t border-gray-700">
                <td className="py-4">
                  <div className="flex items-center">
                    {trade.dex1} → {trade.dex2}
                  </div>
                </td>
                <td className="py-4">{trade.pair}</td>
                <td className="py-4">{trade.amount}</td>
                <td className={`py-4 ${trade.profit.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {trade.profit}
                </td>
                <td className="py-4 text-gray-400">{trade.timestamp}</td>
                <td className="py-4">
                  {trade.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTrades;