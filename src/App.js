import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';

function App() {
    //const [likes, setLikes] = useState(0, )

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. First Post</strong>
                    <div>JavaScript si a popular!</div>
                </div>
                <div className="post__btn">
                    <button>Delete</button>
                </div>

            </div>
        </div>
    );
}

export default App;