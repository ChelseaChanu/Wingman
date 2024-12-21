const OverviewCard = ({card}) =>{

  console.log(card);
  const trendColor = card.trendImage === '/assets/Images/TrendDown.png'? '#F04438': '#15B79F';
  const trend = card.trendImage === '/assets/Images/TrendDown.png'? 'decrease': 'increase';

  return(
    <div className="flex flex-col justify-center gap-2 shadow-card-elevation-1 rounded-[20px] border-[1px] p-6">
      <div className="flex items-center gap-2">
        <img className="w-3 h-3" src={card?.icon} alt="chat" />
          <p className="uppercase font-inter font-semibold text-xs tracking-[0.5px] text-[#667085]">{card?.title}</p>
      </div>
      <p className="font-inter font-medium text-[32px] text-[#212636]">{card?.data}</p>
      <div className="flex items-center gap-2">
        <img src= {card?.trendImage} alt="Increase" />
        <div className="flex items-center gap-1">
          <p style={{color: trendColor}}>{card?.trendPercentage}</p>
          <p className="text-[#667085] font-inter font-normal text-sm">{trend}</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard;