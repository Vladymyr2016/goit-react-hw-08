import { toast } from 'react-toastify';
import AuthForm from './AuthForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Login success');

        navigate('/');
      })
      .catch(() => toast.error('login or email invalid'));
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
