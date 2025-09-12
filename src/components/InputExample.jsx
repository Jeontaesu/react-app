import { useState } from "react";

export default function InputExample() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value); //e.target은 input요소
    };
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>입력한 값: {value}</p>
        </div>
    );
}
