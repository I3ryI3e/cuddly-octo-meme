import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from "./components/post_item";
import Error from "./components/error";
import LifeCycle from "./components/lifeCycle";


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
          <NavLink to="/lifeCycle">Life Cycle</NavLink>
          <hr/>
        </header>
        <Switch>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/lifeCycle" component={LifeCycle}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" exact component={Home}/>
          <Route component={Error}/>
        </Switch>
        </div>
    </BrowserRouter>
  )
}
  

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'));