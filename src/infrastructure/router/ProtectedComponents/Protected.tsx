import { Navigate } from 'react-router-dom';
import { ReactElement, FunctionComponent } from 'react';
import { useAuthContext } from '../../../features/auth/auth.provider';

interface Props {
  children: ReactElement;
}

export const Protected: FunctionComponent<Props> = ({ children }) => {
  const { isAuth } = useAuthContext();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
