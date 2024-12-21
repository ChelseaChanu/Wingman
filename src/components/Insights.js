import BarChart from "./BarChart";
import BarLineChart from "./BarLineChart";
import ForecastsCard from "./ForecatsCard";

const Insights = ()=>{
  return(
    <div>
      <h4 className="font-inter font-medium text-[32px] text-[#212636]">Insights</h4>
      <div className="flex items-center gap-6 py-8 xs:flex-col">
        <BarLineChart/>
        <BarChart/>
        <ForecastsCard/>
      </div>
    </div>
  )
}

export default Insights;