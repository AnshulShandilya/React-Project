import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

//COMPONENTS
import Posts from './components/posts';
import Profile from './components/profile'
import PostItem from './components/PostItem';
import NotFound from './components/NotFound';

class App extends Component{
    render(){
        return(
            <div>
            Home
            </div>
        ) 

    }
}

ReactDOM.render(
<BrowserRouter>
    <div>
        <header>
            <NavLink to="/" activeStyle={{color:'yellow'}} activeClassName='Selected'>Home</NavLink><br/>
            <NavLink to="/profile">Profile</NavLink><br/>
            <NavLink to="/posts">Posts</NavLink>
        </header>
        <Switch>
        <Route path="/Posts/:id" component={PostItem}></Route>  
        <Route path="/profile" component={Profile}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/" component={App}></Route>
        <Route path="*" component={NotFound}></Route>
        </Switch>
    </div>
</BrowserRouter>
,document.querySelector('#root'))