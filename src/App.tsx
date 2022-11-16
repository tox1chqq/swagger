import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Registration } from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';
import { ResetPassword } from './pages/ResetPassword';
import { ForgotPassword } from './pages/ForgotPassword';
import { Main } from './pages/Main';
import { Settings } from './pages/Settings';
import { Delete } from './pages/Delete';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/create-account" element={<Registration />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/user" element={<ProtectedRoute isAuthenticated={true} outlet={<Main />} />} />
                <Route path="/settings" element={<ProtectedRoute isAuthenticated={true} outlet={<Settings />} />} />
                <Route path="/delete-account" element={<ProtectedRoute isAuthenticated={true} outlet={<Delete />} />} />
            </Routes>
        </Layout>
    );
}

export default App;
