import React from 'react';
import { Link } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import {loginUserWatcher, resetPasswordWatcher} from '../redux/profileReducer/actions';
import { useDispatch } from 'react-redux';

export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => dispatch(resetPasswordWatcher(data.email));

    return (
        <div className="flex bg-auth-image min-h-screen justify-center items-center">
            <div className="rounded-3xl bg-white text-center py-4 px-8">
                <h3 className="text-4xl font-semibold mb-3">Forgot password</h3>
                <h4 className="text-xs font-medium mb-10 text-gray-600"></h4>
                <form className="gap-4 grid" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="min-w-[275px] rounded-lg min-h-[50px] px-4 border-2 border-input-border"
                        placeholder="Enter your email"
                        {...register('email')}
                    />
                    <button className="bg-auth-bg-button font-semibold uppercase text-white py-4 min-h-[50px] rounded-lg">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
};
