import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { getContacts, getContactsFilter } from 'store/selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);

  const handleDelete = event => {
    const target = event.target;

    const id = target.dataset['id'];
    dispatch(deleteContact(id));
  };

  const myContacts = contacts
    .filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
    .map(contact => (
      <li
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '3px',
        }}
        key={contact.id}
      >
        <p
          style={{
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {contact.name} <span>{contact.number}</span>
        </p>
        <button
          style={{ margin: '0 0 0 10px' }}
          type="button"
          name="delete"
          data-id={contact.id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    ));

  return (
    <>
      <ul
        style={{
          display: 'flex',
          padding: '0',
          flexDirection: 'column',
          width: '350px',
          margin: '10px auto',
        }}
      >
        {myContacts}
      </ul>
    </>
  );
};

export default Contacts;
