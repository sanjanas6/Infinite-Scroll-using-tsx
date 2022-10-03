import './App.css';
import React from 'react';
import NewsList from './Pages/NewsList';
import Data from "./Pages/Data";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Routes>
      <Route path='/' element={<NewsList />}/>
      <Route path='/details' element={<Data/>} />
      </Routes>
    </div>

  )
}

export default App;
