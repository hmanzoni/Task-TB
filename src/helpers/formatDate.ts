const formatDate = (selectDate:Date) => {
  const todayDateFormatted = selectDate.getFullYear() + "-" + ('0'+(selectDate.getMonth()+1)).slice(-2) + "-" + selectDate.getDate();
  return todayDateFormatted;
}
export default formatDate;