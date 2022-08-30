import { useAuthContext } from '../../features/auth/auth.provider';
import { useEffect, useState } from 'react';
import styles from './AppScreen.module.css';

export const AppScreen = () => {
  const [imgLink, setImgLink] = useState('');
  const { isAuth, checkIfLoggedIn } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      fetch('/api/v1/kitty')
        .then(async (res) => await res.json())
        .then((res) => {
          console.log(res);
          if (res.statusCode >= 400) {
            checkIfLoggedIn();
          } else {
            setImgLink(res.data.src);
          }
        });
    }
  }, [isAuth]);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Ok, here is your cat:</h1>
        <img className={styles.img} src={imgLink} alt="" />
      </div>
    </>
  );
};
