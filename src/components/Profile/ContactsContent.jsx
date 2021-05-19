import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopProfileBlock from './TopProfileBlock';
import styles from './profile.module.css';

function ContactsContent() {
  const contacts = useSelector((state) => state.contacts.items);
  const id = useParams().id;
  const filteredContacts = contacts.filter((contact) => contact._id === id);

  return (
    <div className={styles.profileOverflow}>
      {filteredContacts.map((contact) => {
        return <TopProfileBlock contact={contact} key={contact._id} />;
      })}
    </div>
  );
}

export default ContactsContent;
