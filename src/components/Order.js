import OrderTable from "./OrderTable";

const Order = ()=>{
  return(
    <div className="flex flex-col justify-center gap-3">
      <h4 className="font-inter font-medium text-[32px] text-[#212636] capitalize">orders</h4>
      <OrderTable/>
    </div>
  )
}

export default Order;