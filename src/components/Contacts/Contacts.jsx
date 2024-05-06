import Contact from '../Contact/Contact';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Contact />
    </div>
  );
};

export default Contacts;
