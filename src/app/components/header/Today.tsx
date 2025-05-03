const Today = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return <div>{`${month}/${day}`}</div>;
};

export default Today;
