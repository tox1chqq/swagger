import React, { FC, ReactNode, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hasntMenu } from '../contants';

interface ILayout {
    children?: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
    const { pathname } = useLocation();

    const isShowSideBar = useMemo(() => {
        return !hasntMenu.some((item) => pathname.includes(item));
    }, [pathname]);

    return (
        <div className="grid grid-cols-12">
            {isShowSideBar && (
                <div className="grid col-span-2 shadow-lg shadow-blue-500/50 min-h-screen">
                    <nav>
                        <h3 className="text-center m-5 text-2xl font-semibold">Sidebar</h3>
                        <ul>
                            <li className="flex items-center justify-center p-5">
                                <Link to={'/user'}>User info</Link>
                            </li>
                            <li className="flex items-center justify-center p-5">
                                <Link to={'/settings'}>Settings</Link>
                            </li>
                            <li className="flex items-center justify-center p-5">
                                <Link to={'/delete-account'}>Delete</Link>
                            </li>
                            <li className="flex items-center justify-center p-5">
                                <Link to={'/logout'}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            <div className={isShowSideBar ? 'col-span-10' : 'col-span-12'}>{children}</div>
        </div>
    );
};
