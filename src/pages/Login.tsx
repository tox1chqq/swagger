import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="flex bg-auth-image min-h-screen justify-center items-center">
            <div className="rounded-3xl bg-white text-center py-4 px-8">
                <h3 className="text-4xl font-semibold mb-3">Login</h3>
                <h4 className="text-xs font-medium mb-10 text-gray-600">
                    Enter your credentials
                </h4>
                <form className="gap-4 grid">
                    <input
                        className="min-w-[275px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your login"
                    />
                    <input
                        className="min-w-[275px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <Link
                        to="/auth/create-account"
                        className="text-left pl-2 pb-1"
                    >
                        <p>Create new account</p>
                    </Link>
                    <Link
                        to="/auth/create-account"
                        className="text-left pl-2 pb-4"
                    >
                        <p className="text-auth-link">Forgot your password?</p>
                    </Link>
                    <button className="bg-auth-bg-button font-semibold uppercase text-white py-4 min-h-[50px] rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
