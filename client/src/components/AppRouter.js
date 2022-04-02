import React from 'react';
import {Routes, Route} from 'react-router-dom'
import NotFounded from '../pages/NotFounded';
import { AuthRoutes, PublicRoutes } from '../routes';

const AppRouter = () => {
    return (
        <Routes>
            {AuthRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {PublicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<NotFounded/>}/>
        </Routes>
    );
};

export default AppRouter;