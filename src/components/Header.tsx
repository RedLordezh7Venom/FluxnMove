import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Settings, HelpCircle, Wallet, ArrowRightLeft, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowRightLeft className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">FluxnMove Arbitrage</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 ${
                location.pathname === '/dashboard' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/settings"
              className={`flex items-center space-x-1 ${
                location.pathname === '/settings' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <Link
              to="/help"
              className={`flex items-center space-x-1 ${
                location.pathname === '/help' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
              <span>Help</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-100"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;