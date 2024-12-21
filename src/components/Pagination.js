const Pagination = (props)=>{
  const {number, goToPreviousPage, goToNextPage, changeCurrentPage, currentPage} = props;

  return (
    <div className="w-full flex justify-center items-center pt-8">
      <nav className="w-80 flex items-center">
        <ul className="w-full flex items-center justify-center gap-8 bg-[#f6f9f9] p-3 rounded-[2rem]">
          <li className="p-3 bg-[#d1f4eb] flex items-center justify-center rounded-full cursor-pointer" onClick={goToPreviousPage}>
            <a href="#"><img className="rotate-90" src="/assets/Images/CaretDown.png" alt="Prev" /></a>
          </li>
          <li>
            <ul className="flex items-center gap-5">
              {
                number?.map((n,i)=>(
                  <li className={`${n===currentPage? 'border-2 rounded-full border-[#3fcbbd]': ''}`}>
                    <li key={i} className={`text-sm ${n === currentPage ? 'w-2 h-2 p-4 bg-[#134E48] flex items-center justify-center rounded-full text-[#f6f9f9]' : ''}`}>
                      <a href="#" onClick={(e)=>changeCurrentPage(n,e)}>{n}</a>
                    </li>
                  </li>
                ))
              }
              </ul>
          </li>
          <li className="p-3 bg-[#d1f4eb] flex items-center justify-center rounded-full cursor-pointer" onClick={goToNextPage}>
            <a href="#"><img className="-rotate-90" src="/assets/Images/CaretDown.png" alt="Next" /></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;