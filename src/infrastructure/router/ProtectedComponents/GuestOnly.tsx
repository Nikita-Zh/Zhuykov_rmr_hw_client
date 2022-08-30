import { Navigate } from 'react-router-dom';
import { ReactElement, FC } from 'react';
import { useAuthContext } from '../../../features/auth/auth.provider';

interface Props {
  children: ReactElement;
}

export const GuestOnly: FC<Props> = ({ children }) => {
  const { isAuth } = useAuthContext();
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
