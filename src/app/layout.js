"use client";

import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import '../app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname();
  const activeItem = pathname.split('/')[1];

  return (
    <html lang="en">
      <body className="flex">
        <Sidebar activeItem={activeItem} />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
