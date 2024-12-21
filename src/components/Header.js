const Header = () =>{
  return(
    <div className="px-6 py-3 border-b-[1px] border-[#DCDFE4]">
      <div className="w-full flex items-center gap-3">
        <div className="flex justify-center items-center gap-3 bg-[#CCFBEF] p-3 rounded-full cursor-pointer">
          <div className="w-full h-full">
            <img src= "/assets/Images/ChartPieSlice.png" alt="chart" />
          </div>
          <h6 className="text-lg font-medium font-inter"> Summary</h6>
        </div>
        <div className="flex justify-center items-center gap-3 p-3 cursor-pointer">
          <img src= "/assets/Images/Tag.png" alt="tag" />
          <h6 className="text-lg font-medium font-inter text-[#8A94A6]">Sales</h6>
        </div>
        <div className="flex justify-center items-center gap-3 p-3 cursor-pointer">
          <img src= "/assets/Images/ChatTeardropText.png" alt="chat" />
          <h6 className="text-lg font-medium font-inter text-[#8A94A6]">Chats</h6>
        </div>
      </div>
    </div>
  )
} 

export default Header;