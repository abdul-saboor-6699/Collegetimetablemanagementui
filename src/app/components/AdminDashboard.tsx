import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  DoorOpen, 
  Clock, 
  Calendar, 
  Activity, 
  BarChart3,
  Bell,
  LogOut,
  Menu,
  X,
  GraduationCap,
  GitBranch,
} from 'lucide-react';
import { TimetableBuilder } from './admin/TimetableBuilder';
import { LiveLectureMonitor } from './admin/LiveLectureMonitor';
import { ManualOverride } from './admin/ManualOverride';
import { AnalyticsDashboard } from './admin/AnalyticsDashboard';
import { ClassesManagement } from './admin/ClassesManagement';
import { TeachersManagement } from './admin/TeachersManagement';
import { SubjectsManagement } from './admin/SubjectsManagement';
import { RoomsManagement } from './admin/RoomsManagement';
import { PeriodsManagement } from './admin/PeriodsManagement';
import { NotificationPanel } from './NotificationPanel';
import { FlowVisualization } from './FlowVisualization';

interface AdminDashboardProps {
  onLogout: () => void;
}

type AdminView = 
  | 'dashboard' 
  | 'classes' 
  | 'teachers' 
  | 'subjects' 
  | 'rooms' 
  | 'periods' 
  | 'timetable' 
  | 'live-monitor' 
  | 'analytics';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard' as AdminView, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes' as AdminView, label: 'Classes & Sections', icon: GraduationCap },
    { id: 'teachers' as AdminView, label: 'Teachers', icon: Users },
    { id: 'subjects' as AdminView, label: 'Subjects', icon: BookOpen },
    { id: 'rooms' as AdminView, label: 'Rooms', icon: DoorOpen },
    { id: 'periods' as AdminView, label: 'Periods', icon: Clock },
    { id: 'timetable' as AdminView, label: 'Timetable Engine', icon: Calendar },
    { id: 'live-monitor' as AdminView, label: 'Live Lecture Monitor', icon: Activity },
    { id: 'analytics' as AdminView, label: 'Reports & Analytics', icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-gray-900 mb-2">Admin Control Panel</h1>
              <p className="text-gray-600">Manage your college timetable system</p>
            </div>
            <FlowVisualization />
            <LiveLectureMonitor />
            <ManualOverride />
          </div>
        );
      case 'timetable':
        return <TimetableBuilder />;
      case 'live-monitor':
        return <LiveLectureMonitor />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'classes':
        return <ClassesManagement />;
      case 'teachers':
        return <TeachersManagement />;
      case 'subjects':
        return <SubjectsManagement />;
      case 'rooms':
        return <RoomsManagement />;
      case 'periods':
        return <PeriodsManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-0 md:w-20'
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900">Admin Panel</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="truncate">{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-gray-900">
              {menuItems.find((item) => item.id === currentView)?.label}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white">AD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-gray-900 text-sm">Admin User</p>
                <p className="text-gray-500 text-xs">admin@college.edu</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Notification Panel */}
      {notificationOpen && (
        <NotificationPanel onClose={() => setNotificationOpen(false)} />
      )}
    </div>
  );
}