import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

export default App;
