import styles from './LoginForm.module.css';
import { useAuthContext } from '../../auth.provider';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, ButtonMode } from '../../../../uikit/components/Button/Button';
import { Input } from '../../../../uikit/components/Input/Input';

const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const regexPhoneRuMon = /\+7\d*|\+976\d*/;
const regexPassword = /^[a-zA-Z\d]*$/;

enum LoginFormValueVariables {
  email = 'email',
  phone = 'phone',
  password = 'password',
}

/* const LoginFormValueVariables = {
    email: "email",
    phone: "phone",
    password: "password"
} */

type Brand<T, B extends LoginFormValueVariables> = T & { readonly _brand: B };
type LoginEmail = Brand<string, LoginFormValueVariables.email>;
type LoginPassword = Brand<string, LoginFormValueVariables.password>;
type LoginPhone = Brand<string, LoginFormValueVariables.phone>;

export interface LoginFormFields {
  email: LoginEmail;
  phone: LoginPhone;
  password: LoginPassword;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();
  const { login } = useAuthContext();

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.phone, data.password);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.form__title}>Login</h2>
      <Input
        title={'Email'}
        type={'email'}
        placeholder={'email'}
        {...register('email', {
          /* validate: {
                            isEmailValid: value => {
                                const isValueValid = value.match(regEmail)
                                if (!isValueValid) {
                                    console.log("email not valid")
                                    return false
                                }
                                return true
                            }
                        }, */
          required: 'email is required',
          pattern: {
            value: regEmail,
            message: 'email is not valid',
          },
        })}
        error={errors.email?.message}
      />
      <Input
        title={'Phone'}
        type={'tel'}
        placeholder={'phone'}
        {...register('phone', {
          /* validate: {
                           isPhoneValid: value => {
                               if (value.search(regexPhoneRuMon) === 0) {
                                   return true
                               }
                               return false
                           }
                       } */
          required: 'phone is required',
          pattern: {
            value: regexPhoneRuMon,
            message: 'phone is not valid',
          },
        })}
        error={errors.phone?.message}
      />
      <Input
        title={'Password'}
        type={'password'}
        placeholder={'password'}
        {...register('password', {
          /* validate: {
                            isPasswordValid: value => {
                                const isValueValid = value.match(regexPassword)
                                if (!isValueValid) {
                                    console.log("password not valid")
                                    return false
                                }
                                return true
                            }
                        } */
          required: 'password is required',
          minLength: {
            value: 4,
            message: 'more than 4 characters are required ',
          },
          pattern: {
            value: regexPassword,
            message: 'password is not valid',
          },
        })}
        error={errors.password?.message}
      />
      <div className={styles.form__button}>
        <Button className={styles.btnSubmit} mode={ButtonMode.PRIMARY} type={'submit'}>
          {' '}
          Sign in{' '}
        </Button>
      </div>
    </form>
  );
};
