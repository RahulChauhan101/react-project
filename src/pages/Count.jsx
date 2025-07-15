import {useState} from 'react'
import './Count.css';
const Count = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <div className='counter-card'> 
      <h1>Counter Page</h1>
        <h1>Count is {count} </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
  )
}

export default Count