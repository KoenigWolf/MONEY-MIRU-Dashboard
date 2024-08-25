"use client";

import { useState } from 'react';
import SidebarItem from './SidebarItem';
import { FaHome, FaCog, FaUsers, FaBox, FaMoneyBill, FaChevronLeft } from 'react-icons/fa';

const icons = {
  dashboard: FaHome,           // Dashboard icon
  settings: FaCog,             // Settings icon
  people: FaUsers,             // Employee icon (formerly alerts)
  inventory: FaBox,            // Product icon (formerly reports)
  account_balance: FaMoneyBill, // Money icon (formerly maintenance)
  toggle: FaChevronLeft,        // Toggle icon for sidebar
};

const menuItems = [
  { name: 'Dashboard', icon: 'dashboard', id: 'Dashboard' },
  { name: 'Employee', icon: 'people', id: 'Employee' },
  { name: 'Product', icon: 'inventory', id: 'Product' },
  { name: 'Money', icon: 'account_balance', id: 'Money' },
  { name: 'Settings', icon: 'settings', id: 'Settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className={`bg-blue-900 text-white h-screen ${isCollapsed ? 'w-30' : 'w-40'} transition-width duration-300`}>
      <div
        className="flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <icons.toggle className="w-6 h-6" />
      </div>
      {menuItems.map(item => {
        const IconComponent = icons[item.icon];
        return (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            isCollapsed={isCollapsed}
            IconComponent={IconComponent}
          />
        );
      })}
    </div>
  );
}
