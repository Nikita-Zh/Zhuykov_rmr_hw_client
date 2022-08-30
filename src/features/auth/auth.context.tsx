import { createContext, Dispatch } from 'react';
import { User } from './auth.entity';

interface AuthType {
  user?: User;
  isAuth: boolean;
  login: (email: string, phone: string, password: string, failCatch?: Dispatch<boolean>) => void;
  logout: () => void;
  checkIfLoggedIn: () => void;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);
