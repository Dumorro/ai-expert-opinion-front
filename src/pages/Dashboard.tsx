import React from 'react';
import Layout from '../components/Layout';
import MetricCard from '../components/MetricCard';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard title="All Users" value="10,234" />
        <MetricCard title="Event Count" value="536" />
        <MetricCard title="Conversations" value="1,234" />
        <MetricCard title="New Users" value="324" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Users Per Minute (Last 30 Minutes)</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Countries</h2>
            <ul className="space-y-3">
              {['Bangladesh', 'India', 'Pakistan', 'United States', 'United Kingdom'].map((country) => (
                <li key={country} className="flex justify-between">
                  <span className="text-gray-700">{country}</span>
                  <span className="text-gray-900 font-medium">1,234</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Users</h2>
            <ul className="space-y-3">
              {['USers', 'QS', 'Q6'].map((user) => (
                <li key={user} className="flex justify-between">
                  <span className="text-gray-700">{user}</span>
                  <span className="text-gray-900 font-medium">456</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
