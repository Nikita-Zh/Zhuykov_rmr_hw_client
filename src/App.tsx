import React from "react";
import {Router} from "./infrastructure/router/router"
import "./App.css";
import {AuthProvider, useAuthContext} from "./features/auth/auth.provider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Protected} from "./infrastructure/router/Protected";
import {AppScreen} from "./features/screens/AppScreen";
import {LoginScreen} from "./features/screens/LoginScreen";
import {GuestOnly} from "./infrastructure/router/GuestOnly";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"}
                               element=
                                   {<Protected>
                                       <AppScreen/>
                                   </Protected>}>
                        </Route>

                        <Route path={"/login"}
                               element=
                                   {<GuestOnly>
                                       <LoginScreen/>
                                   </GuestOnly>
                                   }>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;

