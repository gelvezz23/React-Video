import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';


const App = () =>(

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

);
export default App;