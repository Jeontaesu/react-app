import "./App.css";

function Welcome() {
    return <h2>Welcome 컴포넌트입니다.</h2>
}

function App() {
    return (
        <div>
            <Welcome />
            <p>JSX는 쉽습니다.!</p>
        </div>
    )
}

export default App;
