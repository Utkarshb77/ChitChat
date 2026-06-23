import { useState } from 'react';
import Left from './Home/left/Left';
import Right from './Home/right/Right';
import Logout from './Home/left1/Logout';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from './components/loading';

function App() {
  const { AuthUser } = useAuth();

  const ChatLayout = () => (
    <div className='flex h-screen w-full'>
      <Logout />
      <Left />
      <Right />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={AuthUser ? <ChatLayout /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={AuthUser ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/signup" element={AuthUser ? <Navigate to="/" replace /> : <Signup />} />
      <Route path="*" element={<Navigate to={AuthUser ? "/" : "/login"} replace />} />
    </Routes>
  )
}
export default App