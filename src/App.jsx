import "./App.css";
import EventExample from "./components/EventExample";
import FormPractice from "./components/FormPractice";
import GreetingForm from "./components/GreetingForm";
import InputExample from "./components/InputExample";
import LikeButton from "./components/LikeButton";

function App() {
    return (
        <div>
            <h1>React Like Button 예제</h1>
            <LikeButton />            
            <EventExample />
            <InputExample />
            <GreetingForm />
            <FormPractice />
        </div>
    )
}

export default App;