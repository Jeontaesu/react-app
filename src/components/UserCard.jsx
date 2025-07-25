export default function UserCard({ name, age }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '8px', padding: '12px' }}>
      <h3>{name}</h3>
      <p>나이: {age}</p>
    </div>
  );
}


// 또 다른 답
// export default function UserCard(props) {
//   return (
//     <div>
//       <p>{props.name}님은 {props.age}세입니다.</p>
//     </div>
//   );
// }