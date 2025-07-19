import { useState } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const multiplyByTwo = () => setCount(count * 2);
  const divideByTwo = () => setCount(count / 2);

  return (
    <div className='counter-card'> 
      <h1>Counter Page</h1>
      <h2>Count is {count}</h2>
      <button onClick={increment}>+</button>
      <button style={{background:"red"}} onClick={decrement}>-</button>
      <button style={{background:"orange"}} onClick={multiplyByTwo}>×2</button>
      <button style={{background:"#e6259c"}} onClick={divideByTwo}>÷2</button>
    </div>
  );
}

export default Count;
