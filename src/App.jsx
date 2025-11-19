import {   Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirect to signin if not authenticated
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
           <Route path="/" element={<Navigate to= "/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminpage" element={<AdminPage />} />

            
        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all - redirect to signin */}
        <Route path="*" element={<Navigate to="/signin" />} />


        </Routes>
      </div>
  );
}

export default App;