import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.initialNumber);

  const updateByFive = () => {
    setCount(count + 5);
  }

  const subtractByFive = () => {
    setCount(count - 5);
  }

  useEffect(() => {
    console.log('I mounted or uptdated');
  });

  useEffect(() => {
    console.log('I mounted');
  }, []);

  useEffect(() => {
    console.log('count updated');
  }, [count]);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={updateByFive}>Add</button>
      <button onClick={subtractByFive}>Subtract</button>
    </>
  )
}

export default Counter;