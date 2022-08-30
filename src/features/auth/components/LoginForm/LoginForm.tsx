import styles from './LoginForm.module.css';
import { useAuthContext } from '../../auth.provider';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ButtonMode } from '../../../../uikit/components/Button/Button';
import { Input } from '../../../../uikit/components/Input/Input';
import { AuthErrors } from '../../auth.errors';

const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const regexPhoneRuMon = /\+7\d{10}|\+976\d{10}/;
const regexPassword = /^[a-zA-Z\d]*$/;

enum LoginFormValueVariables {
  email = 'email',
  phone = 'phone',
  password = 'password',
}

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

  const [failLogin, setFailLogin] = useState(false);

  const { login } = useAuthContext();

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.phone, data.password, setFailLogin);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.form__title}>Login</h2>
      <Input
        label={'Email'}
        type={'email'}
        placeholder={'email'}
        {...register('email', {
          required: AuthErrors.EMAIL_REQUIRED,
          pattern: {
            value: regEmail,
            message: AuthErrors.EMAIL_UNABLE_FORMAT,
          },
        })}
        error={errors.email?.message}
      />
      <Input
        label={'Phone'}
        type={'tel'}
        placeholder={'phone'}
        {...register('phone', {
          required: AuthErrors.PHONE_REQUIRED,
          pattern: {
            value: regexPhoneRuMon,
            message: AuthErrors.PHONE_UNABLE_FORMAT,
          },
        })}
        error={errors.phone?.message}
      />
      <Input
        label={'Password'}
        type={'password'}
        placeholder={'password'}
        {...register('password', {
          required: AuthErrors.PASSWORD_REQUIRED,
          minLength: {
            value: 4,
            message: AuthErrors.PASSWORD_LENGTH,
          },
          pattern: {
            value: regexPassword,
            message: AuthErrors.PASSWORD_UNABLE_FORMAT,
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
      {failLogin && <div className={styles.error}>Incorrect user data has been entered</div>}
    </form>
  );
};
