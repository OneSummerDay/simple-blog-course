import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    //const [likes, setLikes] = useState(0, )

    return (
        <div className="App">
            <ClassCounter />
        </div>
    );
}

export default App;