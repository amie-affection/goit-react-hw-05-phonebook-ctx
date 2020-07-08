import React from "react";
import OneContact from "../oneContact/OneContact";
import FilterContacts from "../filterContacts/FilterContacts";

const ContactList = ({ contacts, filter, onChange, deleteContact }) => {
  return (
    <>
      <h2 style={{ marginLeft: "30px" }}>Contacts</h2>
      <FilterContacts filter={filter} onChange={onChange} />
      <ul>
        {contacts.map((contact) => (
          <OneContact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
