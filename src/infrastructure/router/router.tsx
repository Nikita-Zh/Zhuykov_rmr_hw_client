import {useContext, useState} from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {AuthProvider, useAuthContext} from "../../features/auth/auth.provider";
import {LoginScreen} from "../../features/screens/LoginScreen";
import {AppScreen} from "../../features/screens/AppScreen";
import {AuthContext} from "../../features/auth/auth.context";

export const Router = () => {
    const {isAuth} = useAuthContext();

    /* if (!token) {
         return <LoginScreen /!* setToken={setToken} *!/ />;
     }*/
    return (
        /* <BrowserRouter>
             <Routes>

                 <Route path={"/login"} element={<LoginScreen/>}></Route>
                 <Route path={"/"} element={<AppScreen/>}></Route>
                 <Route path={"/"}
                        element={true ? <Navigate to={"/"}></Navigate> : <Navigate to={"/login"}></Navigate>}></Route>
             </Routes>
         </BrowserRouter>*/
        <>
            {isAuth ?
                <AppScreen/> :
                <LoginScreen/>}
        </>


    );
};

export default Router;

