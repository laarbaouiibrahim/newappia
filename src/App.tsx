import React, { useState } from 'react';
import { LayoutDashboard, Server, Mail, Settings, History, List, Users, PenTool as Tool, LogOut } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Deliverability from './components/Deliverability';
import Campaigns from './components/Campaigns';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Deliverability', icon: Server },
  { name: 'Campaigns', icon: Mail },
  { name: 'Test History', icon: History },
  { name: 'Save History', icon: List },
  { name: 'Headers', icon: Settings },
  { name: 'Senders', icon: Users },
  { name: 'Tools', icon: Tool }
];

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0">
                <Mail className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">E-Inspire</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="flex items-center p-2 text-gray-400 hover:text-gray-500">
                <LogOut className="w-5 h-5" />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200">
          <nav className="mt-5 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`${
                  activeTab === item.name
                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } flex items-center w-full px-3 py-2 text-sm font-medium border-l-4`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {activeTab === 'Dashboard' && <Dashboard />}
          {activeTab === 'Deliverability' && <Deliverability />}
          {activeTab === 'Campaigns' && <Campaigns />}
        </div>
      </div>
    </div>
  );
}

export default App;