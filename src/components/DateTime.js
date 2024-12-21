const DateTime = (dateTime)=>{

  const date = new Date("2024-04-24T10:24:00");
  const optionDate = {year: 'numeric', month: 'short', day: 'numeric'};
  const orderDate = date.toLocaleDateString('en-GB',optionDate);

  const optionTime = {hour: 'numeric', minute: 'numeric', hour12: true};
  const orderTime = date.toLocaleTimeString('en-GB',optionTime);

  return(
    <td className="p-4 flex flex-col justify-center">
      <p className="font-inter font-normal text-base text-[#212636] xs:text-xs">{orderDate}</p>
      <p className="font-inter font-normal text-xs text-[#212636] xs:text-xs">{orderTime}</p>
    </td>
  )
}

export default DateTime;