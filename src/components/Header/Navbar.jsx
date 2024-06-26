import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/slice';
import { authLogoutThunk } from '../../redux/auth/operations';
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

        {!isLoggedIn && (
          <>
            <li className={s.item}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li className={s.item}>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <button
              onClick={() => dispatch(authLogoutThunk())}
              className={s.btn}
            >
              Logout
            </button>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
