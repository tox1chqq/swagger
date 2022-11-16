import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FieldValues, useForm } from 'react-hook-form';
import { createNewUserWatcher } from '../redux/profileReducer/actions';

export const Registration = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => dispatch(createNewUserWatcher(data.email, data.name, data.password));

    return (
        <div className="flex bg-auth-image min-h-screen justify-center items-center">
            <div className="rounded-3xl bg-white text-center py-4 px-8">
                <h3 className="text-4xl font-semibold mb-3">Create account</h3>
                <h4 className="text-xs font-medium mb-10 text-gray-600">Register at the website</h4>
                <form className="gap-4 grid" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="min-w-[300px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your name"
                        {...register('name')}
                    />
                    <input
                        className="min-w-[300px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your email"
                        {...register('email')}
                    />
                    <input
                        className="min-w-[300px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your password"
                        type="password"
                        {...register('password')}
                    />
                    <div className="flex justify-between">
                        <Link
                            to="/auth/login"
                            className="w-2/5 bg-auth-bg-button font-semibold uppercase text-white py-4 min-h-[50px] rounded-lg"
                        >
                            <p>Sign in</p>
                        </Link>
                        <button
                            type="submit"
                            className="w-2/5 bg-auth-bg-button font-semibold uppercase text-white py-4 min-h-[50px] rounded-lg"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
