import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SideBar from '../src/components/sidebar'
import Navbar from './components/Navbar'
import {ToggleSlider} from 'react-toggle-slider'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkmode = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <div className={`flex ${darkMode? "dark":''}`}>
      <Navbar darkToggler = {toggleDarkmode}/>
     <SideBar darkMode= {darkMode} />
     <div className="flex w-screen h-screen justify-center items-center">
      hi
     <ToggleSlider/>
    
     </div>
    </div>
  )
}

export default App
