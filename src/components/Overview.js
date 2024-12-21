import OverviewCard from "./OverviewCard";
import useFetch from "../utils/useFetch";
import { BASE_API } from "../utils/constants";

const Overview = () =>{

  const {dbData: overview} = useFetch(`${BASE_API}/overview`);

  return(
    <div className="flex flex-col justify-center gap-3 pb-8">
      <div className="flex justify-between items-center">
        <h4 className="font-inter font-medium text-[32px] text-[#212636]">At a glance</h4>
        <div className="flex items-center gap-2 border-[1px] rounded-lg border-[#DCDFE4] px-3 py-[6px] shadow-card-elevation-3">
          <p className="font-inter font-normal text-base text-[#212636]">7 <span>days</span></p>
          <img src="/assets/Images/CaretDown.png" alt="caret down" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 pt-8 xs:grid-cols-1">
        {
           overview?.map((card) => (
            <OverviewCard key={card.id} card={card} />
          ))
        }
      </div>
    </div>
  )
}

export default Overview;