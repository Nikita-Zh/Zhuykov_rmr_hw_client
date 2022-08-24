import {LoginForm} from "../../auth";
import {DefaultLayout} from "../layouts/DefaultLayout";
import styles from "./LoginScreen.module.css"

export const LoginScreen = () => {


    return (
        <DefaultLayout>
            <div className={styles.login_form__container}>
                <LoginForm/>
            </div>
        </DefaultLayout>
    );
};

