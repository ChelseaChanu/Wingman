import Insights from "./Insights";
import Order from "./Order";
import Overview from "./Overview";

const Homepage = () =>{
  return(
    <div className="flex flex-col justify-center p-10">
      <div className="shadow-card-elevation-2 rounded-[20px] border-[1px] py-8 px-6">
        <Overview/>
        <Insights/>
        <Order/>
      </div>
    </div>
  )
}

export default Homepage;