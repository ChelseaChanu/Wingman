const BarLineChart = ()=>{
  return (
    <div className="p-6 border-[1px] shadow-card-elevation-2 rounded-[20px]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1">
          <img src="/assets/Images/ChatTearDrop.png" alt="chat" />
          <h6 className="font-inter font-semibold text-xs text-[#667085] uppercase">Consultations</h6>
        </div>
        <div>
          <img className="" src="/assets/Images/CardContent.png" alt="Bar Line Chart" />
        </div>
      </div>
    </div>
  )
}

export default BarLineChart;