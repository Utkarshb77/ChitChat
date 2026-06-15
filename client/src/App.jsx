import Left from './Home/left/Left';
import Right from './Home/right/Right';
import Logout from './Home/left1/Logout';
function App() {
  return (
    <>
    <div className='flex w-[100%] h-[100vh]'>
      <Logout />
      <Left />
      <Right />
    </div>  
      
    </>
  )
}

export default App
