// import Contact from '../Contact/Contact';
// import FormInput from '../Contact/FormInput';
// import Filter from '../Filter/Filter';
// import s from './Contacts.module.css';

// const Contacts = () => {
//   return (
//     <div className={s.contacts}>
//       <FormInput />
//       <Filter />
//       <Contact props={data} />
//     </div>
//   );
// };

// export default Contacts;

import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading } from '../../redux/contacts/slice';

import { useEffect } from 'react';
import { fetchData } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/filter/selectors';
import s from './Contacts.module.css';
import FormInput from '../Contact/FormInput';
import Filter from '../Filter/Filter';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <FormInput />
      <Filter />
      <ul className={s.ul}>
        {contacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
