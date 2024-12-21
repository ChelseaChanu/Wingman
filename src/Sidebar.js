const Sidebar = () =>{
  return(
    <div className="w-16 h-dvh py-6 top-0 left-0 bg-[#115E56] flex flex-col items-center justify-between">
      <div className="">
        <div className="pb-8 border-b-[1px] border-[#134E48] cursor-pointer">
          <img src="/assets/Images/Logo.png" alt="logo" />
        </div>
        <div className="pt-8 flex flex-col items-center gap-6">
          <img className="cursor-pointer" src= "/assets/Images/Home.png" alt="home" />
          <img className="cursor-pointer" src= "/assets/Images/Chats.png" alt="chats" />
          <img className="cursor-pointer" src= "/assets/Images/Users.png" alt="users" />
        </div>
      </div>
      <div className="cursor-pointer">
        <img src="/assets/Images/settings.png" alt="settings" />
      </div>
    </div>
  )
}

export default Sidebar;