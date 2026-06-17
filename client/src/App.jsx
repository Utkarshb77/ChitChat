import { useState } from 'react';
import Left from './Home/left/Left';
import Right from './Home/right/Right';
import Logout from './Home/left1/Logout';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';


function App() {
  const { AuthUser } = useAuth();
  const [showLogin, setShowLogin] = useState(true);

  if (!AuthUser) {
    return showLogin ? (
      <Login onSwitchToSignup={() => setShowLogin(false)} />
    ) : (
      <Signup onSwitchToLogin={() => setShowLogin(true)} />
    );
  }

  return (
    <div className='flex w-[100%] h-[100vh]'>
      <Logout />
      <Left />
      <Right />
    </div>
  )
}

export default App
