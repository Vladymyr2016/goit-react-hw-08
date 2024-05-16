import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.header}>
      <NavLink to="/">React Auth</NavLink>
      <h2>Volodymyr@gmail.com</h2>
      <ul className={s.items}>
        <li className={s.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/Register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
