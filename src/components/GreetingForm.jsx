import { useState } from "react";

export default function GreetingForm() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        setGreeting(`안녕하세요, ${name}님!`);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>인사하기</button>
            <p>{greeting}</p>
        </div>
    );
}
