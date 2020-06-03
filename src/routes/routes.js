//external
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//internal
import { User, Auth, Home } from "@/pages";

//isAuthenticated : boolean.
export const useRoutes = (isAuthenticated) => {
    //Если пользователь зарегестрирован или находится в системе
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/user' exact>
                    <User />
                </Route>
                {/*Несуществующий роут -> редирект на /user*/}
                <Redirect to='/user' />
            </Switch>
        );
    }
    //Если пользователь НЕ зарегестрирован
    return (
        <Switch>
            <Route path='/auth'>
                <Auth />
            </Route>
            <Route path='/'>
                <Home />
            </Route>

            {/*Несуществующий роут -> редирект на главную*/}
            <Redirect to='/' />
        </Switch>
    );
};
export default useRoutes;
