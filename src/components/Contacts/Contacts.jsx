import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { MarkUpContacts } from './MarkUpContacts';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <MarkUpContacts
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
