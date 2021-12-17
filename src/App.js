import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PageLayout from './Components/PageLayout/PageLayout';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './firebase/AuthProvider';
import SignIn from './Components/Pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<PageLayout />} />
            <Route path='/signIn' element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
