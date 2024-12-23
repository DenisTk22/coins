import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage.tsx';
import Layout from './components/Layout/Layout.tsx';
import CoinsPage from './pages/coinsPage/CoinsPage.tsx';

function App() {
  return (
    <Routes>

      <Route path="/login" element={<LoginPage/>}/>
      <Route path="coins" element={<Layout/>}>
        <Route index element={<CoinsPage/>}/>
        <Route path=":coinId" />
      </Route>
    </Routes>
  );
}

export default App;
