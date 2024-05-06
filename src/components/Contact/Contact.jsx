import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <li className={s.item} key={id}>
        <h2 className={s.title}>{name}</h2>
        <h2 className={s.number}>{number}</h2>
        <button
          className={s.btn}
          type="submit"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
