import { useState } from "react";

const usePagination = (data)=>{
  const [currentPage, setCurrentPage] = useState(1);
  const orderPerPage = 5;
  const lastIndex = orderPerPage * currentPage;
  const firstIndex = lastIndex - orderPerPage;
  const orderList = data?.slice(firstIndex,lastIndex);
  const numberOfPages = Math.ceil(data?.length/orderPerPage);
  const number = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const goToPreviousPage = (e)=>{
    e.preventDefault();
    if(currentPage!==firstIndex)
      setCurrentPage(currentPage-1);

    if(currentPage<= 1)
      setCurrentPage(1);
  }

  const goToNextPage = (e)=>{
    e.preventDefault();
    if(currentPage!==lastIndex)
      setCurrentPage(currentPage+1);

    if(currentPage >= numberOfPages)
      setCurrentPage(numberOfPages);
  }

  const changeCurrentPage = (id,e)=>{
    e.preventDefault();
    setCurrentPage(id);
  }

  return { orderList, number, goToPreviousPage, goToNextPage, changeCurrentPage, currentPage};
}

export default usePagination;