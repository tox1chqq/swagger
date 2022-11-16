import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export type IProtectedRoute = {
    isAuthenticated: boolean;
    outlet: JSX.Element;
};

export const ProtectedRoute = ({ isAuthenticated, outlet }: IProtectedRoute) => {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: '/auth/login' }} />;
    }
};
