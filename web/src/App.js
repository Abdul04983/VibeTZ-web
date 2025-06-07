import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import SearchScreen from './screens/SearchScreen';
import CreatePostScreen from './screens/CreatePostScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/create" element={<CreatePostScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
