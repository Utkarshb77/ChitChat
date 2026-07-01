import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Left from './Home/left/Left';
import Right from './Home/right/Right';
import Logout from './Home/left1/Logout';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from './components/loading';
import useconversations from './statemanage/useconversation';

function App() {
  const { AuthUser } = useAuth();

  const ChatLayout = () => {
    const { selectedConversation } = useconversations();

    return (
      <div className='flex h-screen w-full'>
        <div className="hidden md:flex">
          <Logout />
        </div>

        <div className={`${selectedConversation ? 'hidden' : 'flex'} md:flex w-full md:w-[30%] flex-col`}>
          <Left />
        </div>

        <div className={`${selectedConversation ? 'flex' : 'hidden'} md:flex w-full md:w-[70%] flex-col`}>
          <Right />
        </div>
      </div>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={AuthUser ? <ChatLayout /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={AuthUser ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={AuthUser ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="*" element={<Navigate to={AuthUser ? "/" : "/login"} replace />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}
export default App