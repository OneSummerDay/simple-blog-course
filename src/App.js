import React, {useState} from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
    
    return (
        <div className="App">
            <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
            <PostItem post={{id: 2, title: 'JavaScript', body: 'Description'}} />
            <PostItem post={{id: 3, title: 'JavaScript', body: 'Description'}} />
            
        </div>
    );
}

export default App;