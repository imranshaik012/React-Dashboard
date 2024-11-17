export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface RecentActivity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  type: 'success' | 'warning' | 'error';
}

export interface ChartData {
  labels: string[];
  data: number[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}