/*
import styles from "./Input.module.css"
import React, {InputHTMLAttributes} from "react";
import clsx from "clsx";
import {UseFormRegister} from "react-hook-form";
import {
    LoginFormValues,
    LoginFormValueVariables
} from "../../../features/auth/components/LoginForm/LoginForm";

type Props = /!*React.HTMLAttributes<HTMLInputElement> & React.HTMLAttributes<HTMLInputTypeAttribute>*!/
    InputHTMLAttributes<HTMLInputElement>
    & {
    className?: string,
    title?: string,
    register: UseFormRegister<LoginFormValues>
    name_register: LoginFormValueVariables
    type: React.HTMLInputTypeAttribute
}


export const Input: React.FunctionComponent<Props> = (
    {
        className,
        title,
        register,
        name_register,
        type,
        ...props
    }) => {
    return (
        <div>
            <div>{title}</div>
            <input {...register(name_register)}
                   {...props}
                   type={type}
                   className={clsx(
                       styles.container,
                       className)}
            />
        </div>

    )
}
*/

/////////////////////////

import styles from "./Input.module.css"
import React, {InputHTMLAttributes} from "react";
import clsx from "clsx";
import {UseFormRegister, Validate} from "react-hook-form";
import {
    LoginFormValues,
    LoginFormValueVariables
} from "../../../features/auth/components/LoginForm/LoginForm";

type Props = /*React.HTMLAttributes<HTMLInputElement> & React.HTMLAttributes<HTMLInputTypeAttribute>*/
/*InputHTMLAttributes<HTMLInputElement>*/ React.ComponentPropsWithoutRef<'input'>
    & {
    className?: string,
    title?: string,
    register: UseFormRegister<LoginFormValues>
    name_register: LoginFormValueVariables
    type: React.HTMLInputTypeAttribute
    validation?: Record<string, Validate<any>>
}


export const Input: React.FunctionComponent<Props> = (
    {
        className,
        title,
        register,
        name_register,
        type,
        validation,
        ...props
    }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <input {...register(name_register, {validate: validation})}
                   {...props}
                   type={type}
                   className={clsx(
                       styles.container,
                       className)}
            />
        </div>

    )
}

/*import styles from "./Input.module.css"
import React, {InputHTMLAttributes} from "react";
import clsx from "clsx";
import {Path, UseFormRegister, Validate} from "react-hook-form";
import {LoginFormValueVariables} from "../../../features/auth/components/LoginForm/LoginForm";

type Props<T, TEnumNames> = React.ComponentPropsWithoutRef<'input'> & {
    className?: string,
    title?: string,
    register: UseFormRegister<T>
    name_register: string
    type: React.HTMLInputTypeAttribute
    validation?: Record<string, Validate<any>>
}


export const Input = <T, TEnumNames>(props: Props<T, TEnumNames>): React.ReactElement => {

    const {title, register, name_register, validation, type, className} = props
    return (
        <div>
            <div>{title}</div>
            <input {...register(name_register, {validate: validation})}
                   {...props}
                   type={type}
                   className={clsx(
                       styles.container,
                       className)}
            />
        </div>

    )
}*/


/*export const Input: React.FunctionComponent<Props<T, TEnumNames>> = (
    {
        className,
        title,
        register,
        name_register,
        type,
        validation,
        ...props
    }) => {
    return (
        <div>
            <div>{title}</div>
            <input {...register(name_register, {validate: validation})}
                   {...props}
                   type={type}
                   className={clsx(
                       styles.container,
                       className)}
            />
        </div>

    )
}*/


/*
export const Input = ({register}) => {

    return (
        <div>
            {/!*<div>{title}</div>*!/}
            <input {...register(name_register, {validate: validation})}
                   {...props}
                   type={type}
                   className={clsx(
                       styles.container,
                       className)}
            />
        </div>
    )
}
*/
