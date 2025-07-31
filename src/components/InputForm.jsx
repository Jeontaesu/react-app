import useInput from "../hooks/useInput"

function InputForm() {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');

  return (
    <div>
        <h2>사용자 정보 입력</h2>
        <input type="text" placeholder="이름" value={name} onChange={onNameChange} />
        <input type="email" placeholder="이메일" value={email} onChange={onEmailChange} />
        <p>이름: {name}</p>
        <p>이메일: {email}</p>
    </div>
  )
}

export default InputForm