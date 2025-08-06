
import { useState } from 'react'
import './App.css'
import Navbar from './Components/header/Navbar'
import Sidebar from './Components/sidebar/Sidebar'
import Dashbord from './Pages/Dashboard/Dashbord'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    console.log('Toggle sidebar clicked! Current state:', isSidebarOpen)
    setIsSidebarOpen(!isSidebarOpen)
    
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        {/* Main content area */}
        <Dashbord />
      </div>
    </>
  )
}

export default App
