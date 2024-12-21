const OverviewCard = () =>{
  return(
    <div className="flex flex-col justify-center gap-2 shadow-card-elevation-1 rounded-[20px] border-[1px] p-6">
      <div className="flex items-center gap-2">
        <img src="/assets/Images/ChatTeardrop.png" alt="chat" />
          <p className="uppercase font-inter font-semibold text-xs tracking-[0.5px] text-[#667085]">consultations</p>
      </div>
      <p className="font-inter font-medium text-[32px] text-[#212636]">24</p>
      <div className="flex items-center gap-2">
        <img src="/assets/Images/TrendUp.png" alt="Increase" />
        <div className="flex items-center gap-2">
          <p className="text-[#15B79F]">15%</p>
          <p className="text-[#667085] font-inter font-normal text-sm">increase</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard;