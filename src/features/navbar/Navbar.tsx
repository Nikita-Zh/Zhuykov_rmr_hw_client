import styles from './Navbar.module.css';
import { useAuthContext } from '../auth/auth.provider';
import { Button } from '../../uikit/components/Button/Button';
import React from 'react';

export const Navbar: () => JSX.Element = () => {
  const { isAuth, user, logout } = useAuthContext();
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div>Logo</div>
        {isAuth ? (
          <div className={styles.right_block}>
            <div className={styles.username}>
              <span>{user?.name}</span>
              <span className={styles.avatar}>🤔</span>
            </div>
            <Button onClick={logout}>Logout</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};
