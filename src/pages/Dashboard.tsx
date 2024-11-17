import React from 'react';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import StatCard from '../components/StatCard';
import { mockStats, mockActivities } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Users"
          value={mockStats.totalUsers.toLocaleString()}
          icon={Users}
        />
        <StatCard
          title="Active Users"
          value={mockStats.activeUsers.toLocaleString()}
          icon={Activity}
          trend={12}
        />
        <StatCard
          title="Revenue"
          value={`$${mockStats.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend={mockStats.growth}
        />
        <StatCard
          title="Growth"
          value={`${mockStats.growth}%`}
          icon={TrendingUp}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === 'success'
                      ? 'bg-green-500'
                      : activity.type === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                />
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
              </div>
              <time className="text-sm text-gray-500">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}