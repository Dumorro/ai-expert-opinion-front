import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Settings from './pages/Settings';

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/kanban" element={isAuthenticated ? <Kanban /> : <Navigate to="/" />} />
        <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/" />} />
        <Route path="/users" element={isAuthenticated ? <Users /> : <Navigate to="/" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
