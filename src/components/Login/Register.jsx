import { toast } from 'react-toastify';
import AuthForm from './AuthForm';

const Register = () => {
  const handleSubmit = (values) => {
    toast.info('Register success');
    console.log(values);
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
