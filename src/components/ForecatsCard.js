const ForecastsCard = ()=>{
  return(
    <div className="w-[260px] rounded-[20px] px-6 py-8 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#15B79F] to-[#0E9382] flex flex-col justify-center gap-6">
      <div className="flex items-center gap-1">
        <img className="w-5 h-5" src="/assets/Images/Chats.png" alt="chat" />
        <h6 className="font-inter font-semibold text-xs text-[#CCFBEF] uppercase">Forecasts</h6>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-start gap-8">
          <p className="font-inter font-medium text-[56px] text-[#FFFFFF] tracking-wide">+15%</p>
          <img src="/assets/Images/Increment.png" alt="Increase" />
        </div>
        <p className="font-inter font-normal text-sm text-[#FFFFFF]">forecasted increase in your sales closed by the end of the current month</p>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-start gap-8">
          <p className="font-inter font-medium text-[56px] text-[#FFFFFF] tracking-wide">+20%</p>
          <img src="/assets/Images/Increment.png" alt="Increase" />
        </div>
        <p className="font-inter font-normal text-sm text-[#FFFFFF]">forecasted increase in consultations by the end of the current month</p>
      </div>
    </div>
  )
}

export default ForecastsCard;