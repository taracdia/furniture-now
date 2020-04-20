import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
// import { BrowserRouter } from 'react-router-dom';
//todo: redux, sass, click on a furniture item to make it big

class App extends Component {
    render() {
        return (
            // <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            // </BrowserRouter>
        );
    }
}

export default App;