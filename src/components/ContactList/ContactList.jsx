import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactSelectors';
import { selectFilter } from 'redux/filter/filterSelector';
import './ContactList.module.css';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const foundContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading && !error && <Loader />}
      {isLoading && <p> Total contacts: {contacts.length}</p>}
      {contacts.length > 0 ? (
        <ul>
          {foundContact.map(({ name, id, phone }) => (
            <li key={id}>
              <p>
                {name}: {phone}
              </p>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Phone Book is empty.</p>
      )}
    </>
  );

  // return contacts.length === 0 && isLoading ? (
  //   <Loader />
  // ) : contacts.length !== 0 && foundContact.length !== 0 ? (
  //   <ul>
  //     {foundContact.map(({ name, id, phone }) => {
  //       return (
  //         <li key={id}>
  //           <p>
  //             {name}: {phone}
  //           </p>
  //           <button type="button" onClick={() => dispatch(deleteContact(id))}>
  //             Delete
  //           </button>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // ) : contacts.length === 0 ? (
  //   <p>Your contacts list is empty</p>
  // ) : (
  //   <p>
  //     No contact with name <span>{filter}</span> in your list!
  //   </p>
  // );
};

ContactList.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
