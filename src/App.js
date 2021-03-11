import About from './pages/About';
import Home from './pages/Home';
import Posts from './pages/Posts';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import Post from './pages/Post';
import './App.css';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('https://api.divar.ir/v8/web-search/semnan/mobile-phones?q=سامسونگ')
      .then(res => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <nav>
        <NavLink exact className='link' activeClassName='active-link' to='/'>
          Home
        </NavLink>
        <br />
        <NavLink
          exact
          className='link'
          activeClassName='active-link'
          to='/about'
        >
          About
        </NavLink>
        <br />
        <NavLink
          exact
          className='link'
          activeClassName='active-link'
          to='/posts'
        >
          Posts
        </NavLink>
        <br />
        <NavLink
          exact
          className='link'
          activeClassName='active-link'
          to='/posts/8'
        >
          Post
        </NavLink>
      </nav>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/404'>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default App;
