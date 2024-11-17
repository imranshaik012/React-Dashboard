import React from 'react';
import { Settings, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-1 transition-colors"
      >
        <div className="text-right">
          <p className="font-medium text-sm">{user?.name}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-10 h-10 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <button
            onClick={() => navigate('/profile')}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <hr className="my-1" />
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}