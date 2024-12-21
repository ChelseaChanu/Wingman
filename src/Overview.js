import OverviewCard from "./OverviewCard";

const Overview = () =>{
  return(
    <div className="flex flex-col justify-center gap-3 pb-8">
      <h4 className="font-inter font-medium text-[32px]">At a glance</h4>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
      </div>
    </div>
  )
}

export default Overview;