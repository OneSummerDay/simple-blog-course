import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
    
    return (
        <div className="App">
            <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/>
            <PostItem />
        </div>
    );
}

export default App;