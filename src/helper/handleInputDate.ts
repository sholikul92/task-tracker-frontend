export const handleInputDate = (date: string) => {
  const inputDate = new Date(date);

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");
  const hour = String(inputDate.getHours()).padStart(2, "0");
  const minute = String(inputDate.getMinutes()).padStart(2, "0");

  const formatDate = `${year}-${month}-${day}T${hour}:${minute}`;
  return formatDate;
};
