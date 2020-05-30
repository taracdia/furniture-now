import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
//todo: redux, sass, click on a furniture item to make it big

const store = ConfigureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
        );
    }
}

export default App;