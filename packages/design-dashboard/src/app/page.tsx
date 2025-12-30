'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Total Projects', value: '2,847', change: '+12.5%', trend: 'up' },
  { label: 'Active Users', value: '18,392', change: '+8.2%', trend: 'up' },
  { label: 'Revenue', value: '$94.2K', change: '+23.1%', trend: 'up' },
  { label: 'Conversion Rate', value: '3.24%', change: '-0.4%', trend: 'down' },
];

const recentActivity = [
  { user: 'Sarah Chen', action: 'completed project', project: 'Mobile App Redesign', time: '2m ago' },
  { user: 'Marcus Rodriguez', action: 'started', project: 'Dashboard Analytics', time: '15m ago' },
  { user: 'Emily Watson', action: 'commented on', project: 'Brand Guidelines', time: '1h ago' },
  { user: 'James Kim', action: 'uploaded files to', project: 'Website Refresh', time: '2h ago' },
  { user: 'Lisa Anderson', action: 'completed task in', project: 'Marketing Campaign', time: '3h ago' },
];

const chartData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 78 },
  { month: 'Jun', value: 92 },
];

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="relative min-h-[100dvh] w-full overflow-auto bg-black text-white">
      {/* Enhanced animated aurora background layers */}
      <div className="fixed inset-0 bg-aurora-layer-1" />
      <div className="fixed inset-0 bg-aurora-layer-2" />
      <div className="fixed inset-0 bg-aurora-layer-3" />
      
      {/* Floating particles overlay */}
      <div className="fixed inset-0 bg-particles" />
      
      {/* Main content */}
      <main className="relative z-10 p-6 md:p-8 lg:p-12 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Design Dashboard
            </h1>
            <p className="text-white/60 text-sm md:text-base">
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="text-2xl md:text-3xl font-light text-white/80 tabular-nums">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-white/60 text-sm mb-2">{stat.label}</div>
              <div className="text-3xl md:text-4xl font-semibold mb-2">{stat.value}</div>
              <div className={`text-sm flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                <span>{stat.trend === 'up' ? '↑' : '↓'}</span>
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2 glass-card p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Performance Overview</h2>
            <div className="flex items-end justify-between h-64 gap-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full flex items-end justify-center h-48">
                    <div
                      className="w-full bg-gradient-to-t from-purple-500/80 to-blue-500/80 rounded-t-lg transition-all duration-500 hover:from-purple-400 hover:to-blue-400"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    />
                  </div>
                  <div className="text-white/60 text-xs md:text-sm">{data.month}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="pb-4 border-b border-white/10 last:border-0">
                  <div className="font-medium text-sm mb-1">{activity.user}</div>
                  <div className="text-white/60 text-xs mb-1">
                    {activity.action} <span className="text-white/80">{activity.project}</span>
                  </div>
                  <div className="text-white/40 text-xs">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">New Report</div>
              </button>
              <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-sm font-medium">Add User</div>
              </button>
              <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-medium">Settings</div>
              </button>
              <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left">
                <div className="text-2xl mb-2">📁</div>
                <div className="text-sm font-medium">Projects</div>
              </button>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">API Status</span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Database</span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Storage</span>
                <span className="text-white/80 text-sm">68% Used</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Uptime</span>
                <span className="text-white/80 text-sm">99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

