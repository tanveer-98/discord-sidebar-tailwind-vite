import React, { ReactComponentElement, ReactElement, ReactNode } from 'react'

interface ISideBarIconProps{
    children : React.ReactNode,
    text:string
}
const SideBarIcon = ({children,text}:ISideBarIconProps) => {
  return (
    <div className="sidebar-icon group">{children}
    <span className="sidebar-tooltip group-hover:scale-100  ">{text} </span>
    <div className="group-hover:scale-100 sidebar-arrow ">
 <div className="sidebar-inner"></div>
</div>
    </div>


  )
}
export default SideBarIcon