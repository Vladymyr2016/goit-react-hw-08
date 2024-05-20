import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/slice';
import { logoutThunk } from '../../redux/auth/operations';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.header}>
      <NavLink to="/">React Auth</NavLink>
      <h2>{user.email}</h2>
      <ul className={s.items}>
        <li className={s.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li className={s.item}>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/Register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())} className={s.btn}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
