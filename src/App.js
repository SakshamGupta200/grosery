import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './PAGES/HomePage/Home';
import './App.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='*' element={<div><h1>404, Page not found</h1></div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
