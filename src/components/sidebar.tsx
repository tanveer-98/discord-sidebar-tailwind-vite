import React from 'react'
import SideBarIcon from './SideBarIcon'
import {FaFire,FaPoo,FaAnchor,FaAtom} from 'react-icons/fa'
interface ISidebarProps{
    darkMode : boolean;
}
const Sidebar = ({darkMode}:ISidebarProps) => {
  return (
<div className={darkMode?"dark":""}>
<div className="z-1 shadow-md fixed  text-white flex justify-center items-center dark:bg-pink-800 bg-gray-900 top-0 left-0 h-screen w-16 m-0 ">
        <div className="flex flex-col">
        <SideBarIcon text="Fire 💡" children ={<FaFire size="28"/>}/>
        <SideBarIcon text="Poo 💡 " children ={<FaPoo size="28"/>}/>
        <SideBarIcon text="Anchor 💡" children ={<FaAnchor size="28"/>}/>
        <SideBarIcon text="Atom 💡" children ={<FaAtom size="28"/>}/>
        </div>

    </div>
  
    </div>
    )
}

export default Sidebar