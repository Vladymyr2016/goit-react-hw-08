import { toast } from 'react-toastify';
import AuthForm from './AuthForm';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    toast.info('Register success');
    dispatch(registerThunk(values))
      .unwrap()
      .then((data) => {
        toast.success(`welcom ${data.user.name}`);
        navigate('/');
      })
      .catch(() => toast.error('credentials invalid'));
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <AuthForm
      title="Register"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      type="register"
    />
  );
};

export default Register;
