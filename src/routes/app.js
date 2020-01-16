import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';


const App = () =>(

    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
    </BrowserRouter>

);
export default App;