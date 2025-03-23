import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightLeft, Zap, Shield, BarChart3, ArrowRight } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
    <Icon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

function Landing() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <ArrowRightLeft className="w-12 h-12 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold ml-4">FluxnMove Arbitrage</h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Maximize your crypto trading profits with real-time arbitrage opportunities across multiple DEXs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>Launch App</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">$10M+</div>
              <div className="text-gray-400 mt-2">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50K+</div>
              <div className="text-gray-400 mt-2">Trades Executed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400 mt-2">DEXs Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5K+</div>
              <div className="text-gray-400 mt-2">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose FluxnMove?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            icon={Zap}
            title="Real-Time Arbitrage"
            description="Lightning-fast detection of price differences across multiple DEXs, ensuring you never miss an opportunity."
          />
          <Feature
            icon={Shield}
            title="Secure & Reliable"
            description="Built with advanced security measures and smart contract safety checks to protect your assets."
          />
          <Feature
            icon={BarChart3}
            title="Advanced Analytics"
            description="Comprehensive trading analytics and performance metrics to optimize your strategy."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-gray-400 mb-8">Join thousands of traders already using FluxnMove Arbitrage</p>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <span>Launch App</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;