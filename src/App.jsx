// import FormPractice from "./components/FormPractice";

import TaskList from "./components/TaskList";

function App() {
    const tasks = ["React 공부하기", "운동하기", "블로그 글 쓰기"];

    return (
        <div>
            <h1>조건부 렌더링과 리스트 렌더링 과제</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
