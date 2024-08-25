import { FaHome, FaCog, FaUsers, FaBox, FaMoneyBill, FaChevronLeft } from 'react-icons/fa';

const icons = {
  dashboard: FaHome,
  settings: FaCog,
  people: FaUsers,             // Employee icon (formerly alerts)
  inventory: FaBox,            // Product icon (formerly reports)
  account_balance: FaMoneyBill, // Money icon (formerly maintenance)
  toggle: FaChevronLeft,
};

export default icons;
