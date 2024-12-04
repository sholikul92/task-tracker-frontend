export const formatDate = (taskDate: Date) => {
  const date = new Date(taskDate);

  const option: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleDateString("en-GB", option);
};
