import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col items-center p-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
