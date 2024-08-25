import React from 'react';
import '../globals.css';  // グローバルCSSをインポート

export default function DashboardPage() {
  // ダミーデータ
  const sections = [
    { id: 1, title: 'Sales Overview', content: 'Details about sales overview' },
    { id: 2, title: 'Employee Performance', content: 'Details about employee performance' },
    { id: 3, title: 'Inventory Status', content: 'Details about inventory status' },
    { id: 4, title: 'Revenue', content: 'Details about revenue' },
    { id: 5, title: 'Customer Feedback', content: 'Details about customer feedback' },
    { id: 6, title: 'Market Trends', content: 'Details about market trends' },
  ];

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
