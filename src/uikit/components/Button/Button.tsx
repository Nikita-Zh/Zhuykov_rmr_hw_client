import styles from './button.module.css';
import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

export enum ButtonMode {
  PRIMARY = 'primary',
}

type Props = ButtonHTMLAttributes<any> & {
  className?: string;
  mode?: ButtonMode;
};

export const Button: FC<Props> = ({ className, mode = ButtonMode.PRIMARY, children, type = 'button', ...props }) => {
  return (
    <button {...props} className={clsx(styles.container, className, styles[mode])}>
      <div>{children}</div>
    </button>
  );
};
