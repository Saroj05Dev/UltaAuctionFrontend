import React from 'react'
import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Auctions', path: '/admin/auctions' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Reports', path: '/admin/reports' },
  ];

function AdminSidebar() {
    return (
        <aside className="w-64 bg-white shadow-md h-full">
          <div className="p-6 text-2xl font-bold text-blue-600">UltaAuction Admin</div>
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded hover:bg-blue-100 ${
                    isActive ? 'bg-blue-200 font-semibold' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      );
}

export default AdminSidebar
