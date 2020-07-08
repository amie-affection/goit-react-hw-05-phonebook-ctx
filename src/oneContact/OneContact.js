import React from "react";
import styles from "./OneContact.module.css";

const OneContact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;
