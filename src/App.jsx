import {   Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
           <Route path="/" element={<Navigate to= "/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;