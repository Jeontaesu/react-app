export default function UserCard({name, age}) {
  return (
    <div>
        <p>{name}님은 {age}입니다.</p>
    </div>
  )
}


// 또 다른 답
// export default function UserCard(props) {
//   return (
//     <div>
//       <p>{props.name}님은 {props.age}세입니다.</p>
//     </div>
//   );
// }