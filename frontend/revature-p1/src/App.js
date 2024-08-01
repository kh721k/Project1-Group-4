import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './components/login/Login';
import Register from './components/login/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreatePost from './components/Posts/CreatePost';
import CreateComment from './components/Comments/CreateComment';
import FeedPage from './components/FeedPage/feedPage';
import Logout from './components/ProfilePage/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        Inside App
        <NavBar />
        <Routes>
          <Route path="/" element={<FeedPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user/:username" element={<ProfilePage />}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/posts/:postId/create-comment" element={<CreateComment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
