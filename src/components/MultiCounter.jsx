import { useState } from "react"

export default function MultiCounter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
    const handleReset = () => setCount(0);

  return (
    <div>
        <p>현재숫자: {count}</p>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleReset}>초기화</button>
    </div>
  )
}