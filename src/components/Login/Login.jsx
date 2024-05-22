import { toast } from 'react-toastify';
import AuthForm from './AuthForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(loginThunk(values));

    toast.success('Login success');
  };

  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      initialValues={initialValues}
    />
  );
};

export default Login;
