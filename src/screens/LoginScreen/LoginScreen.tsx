import { LoginForm } from '../../features/auth';
import { DefaultLayout } from '../../features/layouts/DefaultLayout';
import { FC } from 'react';
import styles from './LoginScreen.module.css';

export const LoginScreen: FC = () => {
  return (
    <DefaultLayout>
      <div className={styles.login_form__container}>
        <LoginForm />
      </div>
    </DefaultLayout>
  );
};
