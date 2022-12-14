import styles from './Input.module.css';
import { forwardRef, ComponentPropsWithRef, FC } from 'react';
import clsx from 'clsx';

type Props = ComponentPropsWithRef<'input'> & {
  className?: string;
  label?: string;
  error?: string;
};

export const Input: FC<Props> = forwardRef((props, ref) => {
  const { className, label, error } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{label}</div>
      <input ref={ref} {...props} className={clsx(styles.container, className)} />
      {error && <div className={styles.error}>{error}</div>}
      {!error && <div className={styles.error_mock}></div>}
    </div>
  );
});
