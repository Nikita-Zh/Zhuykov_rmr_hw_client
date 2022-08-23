import styles from "./LoginForm.module.css"
import {useAuthContext} from "../../auth.provider";
import React from "react";
import {useForm} from "react-hook-form";
import {Button, ButtonMode} from "../../../../uikit/components/Button/Button";
import {Input} from "../../../../uikit/components/Input/Input";
import {parsePhoneNumber, isValidPhoneNumber} from "libphonenumber-js";

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPhoneRuMon = /\+7\d*|\+976\d*/
const regexPassword = /^[a-zA-Z\d]*$/

export enum LoginFormValueVariables {
    email = "email",
    phone = "phone",
    password = "password"
}


type Brand<T, B extends LoginFormValueVariables> = T & { readonly _brand: B }

type LoginEmail = Brand<string, LoginFormValueVariables.email>
type LoginPassword = Brand<string, LoginFormValueVariables.password>
type LoginPhone = Brand<string, LoginFormValueVariables.phone>

export type LoginFormValues = {
    email: LoginEmail,
    phone: LoginPhone,
    password: LoginPassword
    /*    [LoginFormValueVariables.email]: LoginEmail,
        [LoginFormValueVariables.phone]: LoginPhone,
        [LoginFormValueVariables.password]: LoginPassword,*/

}

// export type LoginFormValueVariables = {
//     email?: string;
//     phone?: string;
//     password?: string;
// }

export type LoginFormValueVariablesABOBA =
    LoginFormValueVariables.email
    | LoginFormValueVariables.phone
    | LoginFormValueVariables.password


export const LoginForm = () => {
    const {register, handleSubmit} = useForm<LoginFormValues>();

    const {onChange, onBlur, ref, name} = register(LoginFormValueVariables.email)

    const {login} = useAuthContext()
    const submit = () => {

    }

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        login(data.email, data.phone, data.password);
        // login(data.);
    });
    /*    const handleSubmit = (event: any) => {
            event.preventDefault();
            alert('You have submitted the form.')
            login(email, phone, password);
        }*/

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2>Login</h2>
            {/*            <input onChange={onChange}
                   onBlur={onBlur}
                   name={name}
                   ref={ref}
            />*/}

            {/*            <input type={"text"} {...register("aboba", {
                validate: {
                    isEmailFormat: value => {
                        console.log("emailFormat check")
                        return false;
                    },
                    isBooba: value => {

                        return false
                    }
                }
            })}
                   placeholder={"email"}/>*/}
            {/*<input className={inputStyles.input} type={"tel"} {...register("phone")} placeholder={"phone"}/>
            <input className={inputStyles.input} type={"password"} {...register("password")} placeholder={"password"}/>*/}

            {/*<Input register={register} name_register={LoginFormValueVariables.email} type={"email"}
                   placeholder={LoginFormValueVariables.email} title={"ABOBA"}></Input>
            <Input register={register} name_register={LoginFormValueVariables.phone} type={"tel"}
                   placeholder={LoginFormValueVariables.phone} title={"BOOBA"}></Input>
            <Input register={register} name_register={LoginFormValueVariables.password} type={"password"}
                   placeholder={LoginFormValueVariables.password} title={"ABIBA"}></Input>*/}


            <Input register={register} name_register={LoginFormValueVariables.email} type={"email"}
                   placeholder={LoginFormValueVariables.email} title={"Email"}
                   validation={{
                       isEmailValid: value => {
                           const isValueValid = value.match(regEmail)
                           if (!isValueValid) {
                               console.log("email not valid")
                               return false
                           }
                           return true
                       },
                       isAboba: value => {
                           console.log("BOBBBO")
                           return true
                       }
                   }}></Input>
            <Input register={register} name_register={LoginFormValueVariables.phone} type={"tel"}
                   placeholder={LoginFormValueVariables.phone} title={"Phone"}
                   validation={{
                       isPhoneValid: value => {
                           if (value.search(regexPhoneRuMon) === 0) {
                               return true
                           }
                           return false
                       }
                   }}></Input>
            <Input register={register} name_register={LoginFormValueVariables.password} type={"password"}
                   placeholder={LoginFormValueVariables.password} title={"Password"}
            validation={{
                isPasswordValid: value => {
                    const isValueValid = value.match(regexPassword)
                    if (!isValueValid) {
                        console.log("password not valid")
                        return false
                    }
                    return true
                }
            }}></Input>



            <Button className={styles.btnSubmit} mode={ButtonMode.PRIMARY} type={'submit'}> Sign in </Button>
        </form>
    )
};

