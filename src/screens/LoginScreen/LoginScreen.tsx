import { LoginForm } from '../../features/auth';
import { FC } from 'react';
import styles from './LoginScreen.module.css';

export const LoginScreen: FC = () => {
  return (
    <div className={styles.login_form__container}>
      <LoginForm />
    </div>
  );
};
