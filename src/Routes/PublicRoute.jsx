import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/slice';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
