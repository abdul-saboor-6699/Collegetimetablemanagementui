import { useState } from 'react';
import { Login } from './components/Login';
import { AdminDashboard } from './components/AdminDashboard';
import { TeacherPortal } from './components/TeacherPortal';
import { CRInterface } from './components/CRInterface';
import { StudentPortal } from './components/StudentPortal';
import { UserRole } from './data/mockData';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
  };

  const handleLogout = () => {
    setCurrentRole(null);
  };

  // Render based on user role
  if (!currentRole) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentRole === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  if (currentRole === 'teacher') {
    return <TeacherPortal onLogout={handleLogout} />;
  }

  if (currentRole === 'cr') {
    return <CRInterface onLogout={handleLogout} />;
  }

  if (currentRole === 'student') {
    return <StudentPortal onLogout={handleLogout} />;
  }

  return null;
}