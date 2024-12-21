import { API, BASE_API } from "../utils/constants";
import useFetch from "../utils/useFetch";
import usePagination from "../utils/usePagination";
import DateTime from "./DateTime";
import Pagination from "./Pagination";

const OrderTable =() =>{

  const {dbData: headers} = useFetch(`${API}/headers`);
  const {dbData: orders} = useFetch(`${BASE_API}/orders`);
  const {orderList, number, goToPreviousPage, goToNextPage, changeCurrentPage, currentPage} = usePagination(orders);

  return(
    <div className="pt-8">
      <div className="border-[1px] border-[#DCDFE4] rounded-lg">
        <table className="w-full">
          <thead className="border-b-[1px] border-[#DCDFE4] bg-[#F9FAFB] rounded-lg">
            <tr className="">
              {
                headers?.map((data,index)=> (
                  <th className= {`font-inter font-normal text-sm text-[#667085] p-4 text-left ${index ===0 ? "w-1/4": ""}`} key={data.key}>{data.label}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
              {
                orderList?.map((order)=> (
                  <tr key={order.id}>
                    <td className="p-4 flex items-center gap-4 w-5/6 xs:w-4/6 xs:flex-col xs:items-start">
                      <img className="w-10 h-10 rounded-md" src={order.product_image} alt="product"/>
                      <p className="font-inter font-normal text-base text-[#212636] truncate xs:text-xs">{order.product_name}</p>
                    </td>
                    <td>
                      <DateTime dateTime={order.order_date_time}/>
                    </td>
                    <td className="p-4 font-inter font-normal text-base text-[#212636] xs:text-xs">{order.time_spent}</td>
                    <td className="p-4 font-inter font-normal text-base text-[#212636] xs:text-xs">{order.order_value}</td>
                    <td className="p-4 font-inter font-bold text-base text-[#212636] xs:text-xs">{order.commission}</td>
                    <td className="flex items-center gap-3 justify-end p-4">
                      <p className="font-inter font-normal text-xs text-[#8A94A6] text-right">View Chat</p>
                      <img src="/assets/Images/ArrowUpRight.png" alt="arrowUp" />
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
      <Pagination 
        number={number} 
        goToPreviousPage={goToPreviousPage} 
        goToNextPage={goToNextPage}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default OrderTable;