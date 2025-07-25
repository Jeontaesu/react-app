import UserCard from "./UserCard"

export default function UserList() {
    const users = [
        {id: 1, name: '홍길동', age:28},
        {id: 2, name: '김철수', age:32}
    ]
  return (
    <div>
        <h2>👤 사용자 목록</h2>
        {users.map((user) => (
            <UserCard key={user.id} name={user.name} age={user.age}/>
        ))}
    </div>
  )
}