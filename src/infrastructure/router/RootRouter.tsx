import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../features/auth/auth.provider';
import { Protected } from './ProtectedComponents/Protected';
import { AppScreen } from '../../screens/AppScreen';
import { GuestOnly } from './ProtectedComponents/GuestOnly';
import { LoginScreen } from '../../screens/LoginScreen';
import React from 'react';
import { DefaultLayout } from '../../features/layouts/DefaultLayout';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DefaultLayout>
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
        </DefaultLayout>
      </AuthProvider>
    </BrowserRouter>
  );
};
