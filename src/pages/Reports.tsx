import React from 'react';
import Layout from '../components/Layout';

const Reports: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Report</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Yearly Report</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
