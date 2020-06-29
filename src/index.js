import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from "./components/post_item";


const App = ()=>{
  return(
    <BrowserRouter>
      <div>
        <header>
          <NavLink to='/'>Home</NavLink><br/>
          <NavLink to='/posts'>Posts</NavLink><br/>
          <NavLink to={{
            pathname: "/profile"
          }}>Profile</NavLink><br/>
          <hr/>
        </header>
        <Switch>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
        </Switch>
        </div>
    </BrowserRouter>
  )
}
  

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'));