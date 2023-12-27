export const formatedTimeStamp = (time) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const newTime = new Date(time).toLocaleDateString("id-ID", options);

  return newTime;
};
