import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h1>Page not found</h1>
      <Link path="/">Go to home page!</Link>
    </div>
  );
};

export default NotFound;
