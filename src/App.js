import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConnectionQRPage from './page/ConnectionQRPage';
import MainPage from './page/MainPage';
import Header from './component/Header';
import ConnectionPage from './page/ConnectionPage';
import CredentialLibraryPage from './page/CredentialLibraryPage';

function App() {
  return (
    <div className="app-background">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/connection' element={<ConnectionPage />} />
          <Route exact path='/connection_QR' element={<ConnectionQRPage />} />
          <Route exact path='/credentiallibrary' element={<CredentialLibraryPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
