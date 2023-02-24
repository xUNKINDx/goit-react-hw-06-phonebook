import { useDispatch } from 'react-redux';
import { addContact } from 'store/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = event.target;

    dispatch(addContact(name.value, number.value))
    
    event.target.reset();
  };

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          style={{ width: '140px', margin: '20px auto', padding: '8px' }}
          type="submit"
          name="addContact"
        >
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
