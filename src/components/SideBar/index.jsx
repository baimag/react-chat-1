import React, { useEffect } from 'react';
import styles from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import Search from './Search';
import SkeletonComponent from './SkeletonComponent';
import Contact from './Contact';

function Sidebar() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullname.toUpperCase().indexOf(filter.toUpperCase()) > -1,
  );
  const skeleton = new Array(9)
    .fill(1)
    .map((item, index) => <SkeletonComponent key={index} />);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={styles.sidebar}>
      <Search />
      <div className={styles['contacts-chats']}>
        {loading
          ? skeleton
          : filteredContacts.map((contact) => {
              return <Contact key={contact._id} contact={contact} />;
            })}
      </div>
    </div>
  );
}

export default Sidebar;
