import { User, DashboardStats, RecentActivity, ChartData, Notification } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
  status: 'active',
  lastLogin: '2024-03-10T14:32:00Z'
};

export const mockUsers: User[] = [
  mockUser,
  {
    id: '2',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    status: 'active',
    lastLogin: '2024-03-09T11:20:00Z'
  },
  {
    id: '3',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    status: 'inactive',
    lastLogin: '2024-03-01T09:15:00Z'
  }
];

export const mockStats: DashboardStats = {
  totalUsers: 12458,
  activeUsers: 9234,
  revenue: 84567,
  growth: 23.5
};

export const mockActivities: RecentActivity[] = [
  {
    id: '1',
    user: 'Alice Johnson',
    action: 'Created new project',
    timestamp: '2024-03-10T14:32:00Z',
    type: 'success'
  },
  {
    id: '2',
    user: 'Bob Smith',
    action: 'Updated security settings',
    timestamp: '2024-03-10T13:15:00Z',
    type: 'warning'
  },
  {
    id: '3',
    user: 'Carol White',
    action: 'Failed login attempt',
    timestamp: '2024-03-10T12:45:00Z',
    type: 'error'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New User Registration',
    message: 'Alice Johnson has joined the platform',
    type: 'success',
    timestamp: '2024-03-10T14:32:00Z',
    read: false
  },
  {
    id: '2',
    title: 'System Update',
    message: 'Platform maintenance scheduled for tonight',
    type: 'info',
    timestamp: '2024-03-10T13:15:00Z',
    read: false
  },
  {
    id: '3',
    title: 'Security Alert',
    message: 'Multiple failed login attempts detected',
    type: 'warning',
    timestamp: '2024-03-10T12:45:00Z',
    read: true
  }
];

export const mockAnalyticsData = {
  userGrowth: [
    { month: 'Jan', users: 4000 },
    { month: 'Feb', users: 4500 },
    { month: 'Mar', users: 5300 },
    { month: 'Apr', users: 6200 },
    { month: 'May', users: 7100 },
    { month: 'Jun', users: 8400 }
  ],
  userActivity: [
    { name: 'Mon', active: 2400, inactive: 1398 },
    { name: 'Tue', active: 1398, inactive: 2210 },
    { name: 'Wed', active: 3800, inactive: 2290 },
    { name: 'Thu', active: 3908, inactive: 2000 },
    { name: 'Fri', active: 4800, inactive: 2181 },
    { name: 'Sat', active: 3800, inactive: 2500 },
    { name: 'Sun', active: 4300, inactive: 2100 }
  ]
};