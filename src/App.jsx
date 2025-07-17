import "./App.css";
import UserCard from "./components/UserCard";

function Welcome() {
    return <h2>Welcome 컴포넌트입니다.</h2>
}

function App() {
    return (
        <div>
            <h1>👋 React Props 예제</h1>
            <UserCard name="홍길동" age={30}/>
            <UserCard name="김철수" age={24}/>
        </div>
    )
}

export default App;
