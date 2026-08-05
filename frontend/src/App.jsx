import React from 'react';
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import EditGame from './pages/EditGame';
import ShowGame from './pages/ShowGame';
import DeleteGame from './pages/DeleteGame';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={Home()} />
      <Route path='/games/create' element={<CreateGame/>} />
      <Route path='/games/details/:id' element={<ShowGame/>} />
      <Route path='/games/edit/:id' element={<EditGame/>} />
      <Route path='/games/delete/:id' element={<DeleteGame/>} />
    </Routes>
  )
}

export default App