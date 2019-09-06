import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch
} from "react-router-dom";

import Home from './home'
import AddUser from './addUser'
import List from './list'

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/list" exact component={List} />
        </Switch>
    </Router>
)