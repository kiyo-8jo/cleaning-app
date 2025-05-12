const Today = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return <div className="text-sm sm:text-lg">{`${month}/${day}`}</div>;
};

export default Today;
