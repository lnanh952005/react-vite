import "./style.css";
const MyComponent = () => {
  const lenhatanh = {
    name: " le nhat anh",
    age: 24,
  };

  return (
    <>
      <div>{console.log(lenhatanh)} le nhat anh</div>
      <div className="fragment">fragment</div>
    </>
  );
};

export default MyComponent;
