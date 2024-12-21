import Overview from "./Overview";

const Homepage = () =>{
  return(
    <div className="flex flex-col justify-center p-10">
      <div className="shadow-card-elevation-1 rounded-[20px] border-[1px] py-8 px-6">
        <Overview/>
      </div>
    </div>
  )
}

export default Homepage;