import "./App.css";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";

// components
import Sidebar from "./components/Sidebar";

// pages
import { Dashboard } from "./pages/Dashboard";

// REDUX STORE
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Sidebar></Sidebar>
                <Switch>
                    <Route exact path="/">
                        <Dashboard></Dashboard>
                    </Route>
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
