import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'store/filtersSlice';
import { getContactsFilter } from 'store/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const handleChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label>Find contacts by name</label>
        <input
          style={{ margin: '0 0 0 10px' }}
          onChange={handleChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
        />
      </div>
    </>
  );
};

export default Filter;
