import { useForm } from 'react-hook-form';
import s from './FormInput.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FormInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const submit = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <div className={s.formInput}>
      <form onSubmit={handleSubmit(submit)}>
        <p className={s.name}>Name</p>
        <input
          className={s.fild}
          type="text"
          {...register('name', { required: true })}
        />

        <p className={s.name}>Number</p>
        <input
          className={s.fild}
          type="tel"
          {...register('number', { required: true })}
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormInput;
