import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/login'/>
      <Route path='coins'>
        <Route index/> {/**главная страница: /coins */}
        <Route path=':coinId' /> {/**через : - :coinId будет в качестве параметра*/}
      </Route>
    </Routes>
  );
}

export default App;
