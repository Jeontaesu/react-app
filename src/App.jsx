import ProductList from "./components/ProductList";
import TaskList from "./components/TaskList";

function App() {
   // const tasks = []; // 할 일이 없을 때 테스트용 
  return (
    <div>
      <h1>React 컴포넌트 분리 & 재사용 예제</h1>
      <ProductList />
    </div>
  );
}

export default App;