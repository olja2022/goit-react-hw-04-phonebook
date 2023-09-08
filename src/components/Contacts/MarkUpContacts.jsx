import css from './Contacts.module.css';

export function MarkUpContacts({ name, number, id, deleteContact }) {
    return (
      <li className={css.listItem}>
        {name}: {number}
        <button className={css.deleteBtn} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }