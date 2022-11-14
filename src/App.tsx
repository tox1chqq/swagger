import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Registration } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/create-account" element={<Registration />} />
        </Routes>
    );
}

export default App;
