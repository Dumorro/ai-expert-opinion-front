import React from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="bg-white border-b p-4 flex items-center justify-between">
      <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex-grow"></div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="p-2 relative hover:bg-gray-100 rounded-lg">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
        </button>

        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 hover:bg-gray-100 rounded-lg flex items-center space-x-2"
          title="Logout"
        >
          <LogOut className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
