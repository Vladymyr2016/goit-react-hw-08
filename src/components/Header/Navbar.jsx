import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.header}>
      <NavLink to="/">React Auth</NavLink>
      <h2>Volodymyr@gmail.com</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
