// import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdContacts } from "react-icons/md";
import { PiChatsCircleFill } from "react-icons/pi";
const SidebarHeading = () => {
  return (
  <>
  
  <div className="flex justify-between items-center bg-slate-800 py-3  px-2">
        <CgProfile size={36} color="white"  className="mr-20"/>

        <MdContacts size={20} color="white"/>
        <PiChatsCircleFill size={20} color="white"/>
      </div>
  </>
  )
}

export default SidebarHeading