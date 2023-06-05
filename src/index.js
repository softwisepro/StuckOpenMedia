import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './container/pages/ForgetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='/forget_password' element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

