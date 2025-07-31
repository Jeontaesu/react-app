import { useState } from "react"

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChnage = (e) => {
    setValue(e.target.value);    
  }

  return [value, onChnage];
}