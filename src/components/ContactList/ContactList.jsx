import PropTypes from 'prop-types';
import './ContactList.module.css';

export const ContactList = ({ contacts, delContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => delContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
