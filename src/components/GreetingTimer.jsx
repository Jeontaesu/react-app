import { useEffect, useState } from "react"

export default function GreetingTimer() {
    const [message, setMessage] = useState('안녕하세요!');

    useEffect(()=> {
        const timer = setTimeout(() => {
            setMessage('5초 지남 - 인사 종료');
        }, 5000);

        return () => clearTimeout(timer); //정리
    }, []);

  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}