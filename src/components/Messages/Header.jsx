import React from 'react';
import styles from './messages.module.css';
import { useSelector } from 'react-redux';
import { application, contacts } from '../../redux/ducks';
import FilterMessages from './FiltrMessages';
import { useParams } from 'react-router-dom';

function Header(props) {
  const params = useParams().id;
  const contact = useSelector((state) => {
    return state.contacts.items.find((contact) => contact._id === params);
  });

  const loadingMessages = useSelector((state) => state.messages.loading);

  if (loadingMessages) {
    return (
      <div className={styles.headerLoading}>
        <span className="material-icons">cached</span>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <div className={styles['header-center-block']}>
        <div className={styles.messageSearch}>
          <span className="material-icons">search</span>
          <FilterMessages />
        </div>
        <div className={styles.messageAuthorName}>
          <div className={styles.messageAuthorNameTitle}>
            {contact?.fullname}
          </div>
          <div className={styles.messageAuthorNameOnline}>
            <span className="material-icons">circle</span>
          </div>
        </div>
        <div className={styles.messageSettings}>
          <span className="material-icons">settings</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
