import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './App.css';

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const Posts = lazy(() => import('./pages/Posts'));
const Post = lazy(() => import('./pages/Post'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
          <Suspense fallback={<div>loading...</div>}>
            <About />
          </Suspense>
        </Route>
        <Route path='/posts/:id'>
          <Suspense fallback={<div>loading...</div>}>
            <Post />
          </Suspense>
        </Route>
        <Route path='/posts'>
          <Suspense fallback={<div>loading...</div>}>
            <Posts />
          </Suspense>
        </Route>
        <Route path='/' exact>
          <Suspense fallback={<div>loading...</div>}>
            <Home />
          </Suspense>
        </Route>
        <Route path='/404'>
          <Suspense fallback={<div>loading...</div>}>
            <NotFound />
          </Suspense>
        </Route>
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default App;
