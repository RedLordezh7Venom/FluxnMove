import React, { useState } from 'react';
import { Save } from 'lucide-react';

const dexOptions = [
  { id: 'uniswap', name: 'Uniswap' },
  { id: 'sushiswap', name: 'SushiSwap' },
  { id: 'pancakeswap', name: 'PancakeSwap' },
  { id: 'curve', name: 'Curve' },
];

const strategies = [
  { id: 'basic', name: 'Basic Arbitrage' },
  { id: 'flash', name: 'Flash Loan Arbitrage' },
  { id: 'multi', name: 'Multi-Hop Arbitrage' },
];

function Settings() {
  const [settings, setSettings] = useState({
    profitThreshold: '0.5',
    slippageTolerance: '1.0',
    selectedDexes: ['uniswap', 'sushiswap'],
    selectedStrategy: 'basic',
    gasLimit: '500000',
    maxHops: '3',
    emailNotifications: true,
    telegramNotifications: false,
    discordNotifications: false,
    telegramBotToken: '',
    discordWebhook: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'selectedDexes') {
        const newSelectedDexes = checkbox.checked
          ? [...settings.selectedDexes, value]
          : settings.selectedDexes.filter(dex => dex !== value);
        setSettings(prev => ({ ...prev, selectedDexes: newSelectedDexes }));
      } else {
        setSettings(prev => ({ ...prev, [name]: checkbox.checked }));
      }
    } else {
      setSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the settings to your backend
    console.log('Settings saved:', settings);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <button
            onClick={handleSubmit}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <Save className="w-5 h-5" />
            <span>Save Settings</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* General Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Minimum Profit Threshold (%)
                </label>
                <input
                  type="number"
                  name="profitThreshold"
                  value={settings.profitThreshold}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slippage Tolerance (%)
                </label>
                <input
                  type="number"
                  name="slippageTolerance"
                  value={settings.slippageTolerance}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* DEX Selection */}
          <section>
            <h2 className="text-xl font-semibold mb-4">DEX Selection</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dexOptions.map(dex => (
                <label key={dex.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="selectedDexes"
                    value={dex.id}
                    checked={settings.selectedDexes.includes(dex.id)}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>{dex.name}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Strategy Settings */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Strategy Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Strategy
                </label>
                <select
                  name="selectedStrategy"
                  value={settings.selectedStrategy}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {strategies.map(strategy => (
                    <option key={strategy.id} value={strategy.id}>
                      {strategy.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Gas Limit
                </label>
                <input
                  type="number"
                  name="gasLimit"
                  value={settings.gasLimit}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Maximum Hops
                </label>
                <input
                  type="number"
                  name="maxHops"
                  value={settings.maxHops}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-6">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>Email Notifications</span>
                </label>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="telegramNotifications"
                    checked={settings.telegramNotifications}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>Telegram Notifications</span>
                </label>
                {settings.telegramNotifications && (
                  <input
                    type="text"
                    name="telegramBotToken"
                    value={settings.telegramBotToken}
                    onChange={handleChange}
                    placeholder="Telegram Bot Token"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="discordNotifications"
                    checked={settings.discordNotifications}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                  />
                  <span>Discord Notifications</span>
                </label>
                {settings.discordNotifications && (
                  <input
                    type="text"
                    name="discordWebhook"
                    value={settings.discordWebhook}
                    onChange={handleChange}
                    placeholder="Discord Webhook URL"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Settings;