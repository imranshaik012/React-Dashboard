import React from 'react';
import { Bell } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

export default function NotificationsPopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-3 hover:bg-gray-50 ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${
                      notification.type === 'success'
                        ? 'bg-green-500'
                        : notification.type === 'warning'
                        ? 'bg-yellow-500'
                        : notification.type === 'error'
                        ? 'bg-red-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <div>
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(notification.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t">
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
}