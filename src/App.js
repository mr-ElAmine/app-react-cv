import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './pages/Main';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/app-react-cv/' element={<Main/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
