// onClick 사용 예제
export default function EventExample() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다.!');
  }
  return (
    <button onClick={handleClick}>클릭</button>
  )
}