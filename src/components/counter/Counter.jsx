import React, { useEffect, useState } from 'react';
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => setCount(prev => prev + 1);

    const decrementCount = () => setCount(prev => prev !== 0 ? prev - 1 : 0);

    useEffect(() => {
        console.log('Counter >>>> Mounted')
        return () => {
            console.log('Counter >>>> Unmounted')
        }
    },[])

    useEffect(() => {
        console.log('Counter >>>> Changes')
    },[count])


  return (

    <div>
        <button onClick={decrementCount}>Decrement</button>
        <input value={count} readOnly/>
        <button onClick={incrementCount}>Increment</button>
    </div>

  )
}
