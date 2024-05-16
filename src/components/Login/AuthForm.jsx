import { Formik, Field, Form } from 'formik';
import s from './AuthForm.module.css';

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <div className={s.container}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          {type === 'register' && (
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          )}
          <Field
            className={s.input}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button className={s.btn} type="submit">
            {title}
          </button>
          <p>
            {type === 'register'
              ? 'already have an account'
              : "don't have account"}
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
