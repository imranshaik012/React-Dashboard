import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart2, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <LayoutDashboard className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors ${
              isActive ? 'bg-gray-800 text-blue-400' : ''
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Overview</span>
        </NavLink>
        
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors ${
              isActive ? 'bg-gray-800 text-blue-400' : ''
            }`
          }
        >
          <Users className="w-5 h-5" />
          <span>Users</span>
        </NavLink>
        
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors ${
              isActive ? 'bg-gray-800 text-blue-400' : ''
            }`
          }
        >
          <BarChart2 className="w-5 h-5" />
          <span>Analytics</span>
        </NavLink>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors ${
              isActive ? 'bg-gray-800 text-blue-400' : ''
            }`
          }
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>
      
      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors mt-auto absolute bottom-4 w-[calc(100%-2rem)]"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}