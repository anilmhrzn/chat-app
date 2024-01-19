import { CgProfile } from "react-icons/cg";

const ListChats = () => {
  return (
    <div className="  flex flex-col  ">
      <div className="flex items-center h-20 hover:bg-slate-700 ">
        <div className="w-1/4 h-full flex items-center">
          <CgProfile size={52} className="pl-2 " />
        </div>
        <div className="w-full flex flex-col h-full justify-evenly items-center ">
          <div className="flex w-full justify-between h-1/2 ">
            <span className="overflow-hidden py-3 h-full">Anil Maharjan </span>
            <span className="pr-3 h-full py-3 w-1/4 overflow-hidden">time </span>
          </div>
          <div className="flex w-full items-start mb-4 overflow-hidden h-1/2">chats </div>
        </div>
      </div>
      <div className="flex items-center h-20 hover:bg-slate-700 ">
        <div className="w-1/4 h-full flex items-center">
          <CgProfile size={52} className="pl-2 " />
        </div>
        <div className="w-full flex flex-col h-full justify-evenly items-center ">
          <div className="flex w-full justify-between h-1/2 ">
            <span className="overflow-hidden py-3 h-full">Anil Maharjan </span>
            <span className="pr-3 h-full py-3 w-1/4 overflow-hidden">time </span>
          </div>
          <div className="flex w-full items-start mb-4 overflow-hidden h-1/2">chats </div>
        </div>
      </div>
      <div className="flex items-center h-20 hover:bg-slate-700 ">
        <div className="w-1/4 h-full flex items-center">
          <CgProfile size={52} className="pl-2 " />
        </div>
        <div className="w-full flex flex-col h-full justify-evenly items-center ">
          <div className="flex w-full justify-between h-1/2 ">
            <span className="overflow-hidden py-3 h-full">Anil Maharjan </span>
            <span className="pr-3 h-full py-3 w-1/4 overflow-hidden">time </span>
          </div>
          <div className="flex w-full items-start mb-4 overflow-hidden h-1/2">chats </div>
        </div>
      </div>
      <div className="flex items-center h-20 hover:bg-slate-700 ">
        <div className="w-1/4 h-full flex items-center">
          <CgProfile size={52} className="pl-2 " />
        </div>
        <div className="w-full flex flex-col h-full justify-evenly items-center ">
          <div className="flex w-full justify-between h-1/2 ">
            <span className="overflow-hidden py-3 h-full">Anil Maharjan </span>
            <span className="pr-3 h-full py-3 w-1/4 overflow-hidden">time </span>
          </div>
          <div className="flex w-full items-start mb-4 overflow-hidden h-1/2">chats </div>
        </div>
      </div>
    </div>
  );
};

export default ListChats;
