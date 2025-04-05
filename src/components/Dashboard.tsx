import React from 'react';
import { BarChart, TrendingUp, Mail, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'Total Sent', value: '156,789', change: '+12.5%', icon: Mail },
  { name: 'Delivery Rate', value: '98.2%', change: '+2.1%', icon: TrendingUp },
  { name: 'Bounce Rate', value: '1.8%', change: '-0.5%', icon: AlertCircle },
  { name: 'Revenue', value: '$12,545', change: '+15.3%', icon: BarChart },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="mt-2">
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500"> vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Statistics Chart Placeholder */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900">Delivery Statistics</h2>
        <div className="h-64 mt-4 bg-gray-50 rounded border border-gray-200">
          {/* Chart will be implemented here */}
        </div>
      </div>
    </div>
  );
}