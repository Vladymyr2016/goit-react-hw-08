import Contact from '../Contact/Contact';
import Filter from '../Filter/Filter';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Filter />
      <Contact />
    </div>
  );
};

export default Contacts;
