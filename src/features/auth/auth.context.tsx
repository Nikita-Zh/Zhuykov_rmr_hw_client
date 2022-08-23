import {createContext} from "react";
import {User} from "./auth.entity";

type AuthType = {
    user?: User;
    isAuth: boolean;
    login(email: string, phone: string, password: string): void;
    logout(): void;
}
export const AuthContext = createContext<AuthType | undefined>(undefined);

