import {useState, useEffect, useContext} from "react";
import {AuthContext} from "./auth.context";
import {API} from "../../infrastructure/api";
import {User} from "./auth.entity";

export const AuthProvider = (props: any) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [user, setUser] = useState<User | undefined>(undefined)
    const {children} = props

    useEffect(() => {
        fetch(API.PROFILE_URL)
            .then(res => {
                if (res.status == 200) {
                    setIsAuth(true)
                    res.json()
                        .then(res => {
                            const newUser: User = {
                                name: res.data.name
                            }
                            setUser(newUser)
                        })
                } else {
                    setIsAuth(false)
                }
            })
    }, [])

    const login = (email: string, phone: string, password: string) => {
        const req = {
            email,
            phone,
            password
        }
        fetch(API.LOGIN_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req)
        }).then(res => {
            console.log("REQ: ", JSON.stringify(req))
            console.log("RES: ", res)
            if (res.status == 200) {
                setIsAuth(true)
                getProfile()
            } else {
                setIsAuth(false)
            }
        })
    }

    const logout = () => {
        fetch(API.LOGOUT_URL, {
            method: "POST"
        }).then(res => {
            console.log("RES: ", res)
            if (res.status == 200) {
                setIsAuth(false)
            }
        })
    }

    const getProfile = () => {
        fetch(API.PROFILE_URL)
            .then(res => res.json())
            .then(res => {
                const newUser: User = {
                    name: res.data.name
                }
                setUser(newUser)
            })
    }


    return (
        <AuthContext.Provider value={
            {
                user,
                isAuth,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    const value = useContext(AuthContext)
    if (!value) {
        throw Error("useAuthContext can only be used inside AuthProvider")
    }
    return value;
}