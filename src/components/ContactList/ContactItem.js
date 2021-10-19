import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactItem({ name, number, id, deleteContact }) {
  return (
    <li key={id} className={s.contactItem}>
      {name}: {number}
      <button
        type="button"
        className={s.button}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
