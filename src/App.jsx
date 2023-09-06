import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import People from './components/People'
import Error from './components/Error'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
