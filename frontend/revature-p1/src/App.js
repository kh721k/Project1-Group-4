import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        Inside App
        <NavBar/>
        {/* <Switch>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/registration" element={<RegistrationPage/>}></Route>
          <Route path="/feed" element={<FeedPage/>}></Route>
          <Route path="/users/:userId" element={<ProfilePage/>}></Route>
          <Route path="/users/:userId/posts/:postId" element={<PostPage/>}></Route>
          <Route path="/create-post" element={<CreatePost/>}></Route>
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
