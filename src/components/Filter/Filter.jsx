import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filter/slice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(filterContact(e.target.value));
  };
  return (
    <div className={s.container}>
      <form className={s.form}>
        <p className={s.title}>Find contacts by name</p>
        <input
          className={s.fild}
          onInput={submit}
          type="text"
          name="filterTitle"
        />
      </form>
    </div>
  );
};

export default Filter;
