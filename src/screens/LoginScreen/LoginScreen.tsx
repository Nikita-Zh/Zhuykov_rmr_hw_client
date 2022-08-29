import { LoginForm } from '../../features/auth';
import { DefaultLayout } from '../../features/layouts/DefaultLayout';
import styles from './LoginScreen.module.css';

export const LoginScreen = () => {
  return (
    <DefaultLayout>
      <div className={styles.login_form__container}>
        <LoginForm />
      </div>
    </DefaultLayout>
  );
};
