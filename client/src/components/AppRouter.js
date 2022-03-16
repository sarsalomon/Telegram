import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '..';
import NotFounded from '../pages/NotFounded';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<NotFounded/>}/>
        </Routes>
    );
});

export default AppRouter;