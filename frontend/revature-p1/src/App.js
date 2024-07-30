import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Post from './Posts/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        Inside App
        <NavBar/>
        <Routes>
          {/* <Route path="/" element={<FeedPage/>}></Route> */}
          {/* <Route path="/login" element={<LoginPage/>}></Route> */}
          {/* <Route path="/registration" element={<RegistrationPage/>}></Route> */}
          <Route path="/users/:username" element={<ProfilePage/>}></Route>
          {/* <Route path="/users/:username/posts/:postId" element={<PostPage/>}></Route> */}
          {/* <Route path="/create-post" element={<CreatePost/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
