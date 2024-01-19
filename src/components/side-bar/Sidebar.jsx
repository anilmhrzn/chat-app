// import React from 'react'

import SidebarContent from "./SidebarContent";
import SidebarHeading from "./SidebarHeading";



const Sidebar = () => {
  return (
    <div className=" bg-slate-600 w-1/4 flex flex-col  ">
      <SidebarHeading/>
      <SidebarContent/>
    </div>
  );
};

export default Sidebar;
