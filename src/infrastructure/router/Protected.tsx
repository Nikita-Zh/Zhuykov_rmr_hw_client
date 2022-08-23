import {Navigate} from "react-router-dom";
import React, {FunctionComponent} from "react";
import {useAuthContext} from "../../features/auth/auth.provider";

type Props = {
    children: React.ReactElement
}
export const Protected: FunctionComponent<Props> = (
    {
        children
    }) => {
    const {isAuth} = useAuthContext()
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return children;
};