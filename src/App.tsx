import React from 'react';
import './App.css';
import { AuthProvider } from './features/auth/auth.provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Protected } from './infrastructure/router/Protected';
import { AppScreen } from './screens/AppScreen';
import { LoginScreen } from './screens/LoginScreen';
import { GuestOnly } from './infrastructure/router/GuestOnly';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path={'/'}
              element={
                <Protected>
                  <AppScreen />
                </Protected>
              }
            ></Route>

            <Route
              path={'/login'}
              element={
                <GuestOnly>
                  <LoginScreen />
                </GuestOnly>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
