import { useState } from "react"

export default function FormPractice() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        setGreeting(`${name}님 반갑습니다!`)
    }

  return (
    <div>
        <input type="text" value={name} onChange={handleChange}/>
        <button onClick={handleSubmit}>인사버튼</button>
        <p>{greeting}</p>
    </div>
  )
}