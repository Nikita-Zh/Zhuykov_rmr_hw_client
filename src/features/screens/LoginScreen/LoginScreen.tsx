import {LoginForm} from "../../auth";
import {DefaultLayout} from "../layouts/DefaultLayout";

export const LoginScreen = () => {


    return (
        <DefaultLayout>
            <div className={"wrapper"}>
                <div className="body">
                    <LoginForm/>
                </div>
            </div>
        </DefaultLayout>

    );
};

