import React from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FilterMessages from './FilterMessages';
import { useParams } from 'react-router-dom';
import { changeShowProfile } from '../../redux/ducks/messages';

function Header() {
  const dispatch = useDispatch();
  const params = useParams().id;
  const contacts = useSelector((state) => state.contacts.items);
  const contact = contacts.find((contact) => contact._id === params);
  const loadingMessages = useSelector((state) => state.messages.loading);
  const showProfile = useSelector((state) => state.messages.showProfile);
  const handleChangeShow = () => {
    dispatch(changeShowProfile(showProfile));
  };

  return (
    <div className={styles.header}>
      <div className={styles['header-center-block']}>
        <FilterMessages />
        <div className={styles.messageAuthorName}>
          <div className={styles.messageAuthorNameTitle}>
            {loadingMessages ? (
              <div className={styles.headerLoading}>
                <span className="material-icons">cached</span>
                <div>Loading...</div>
              </div>
            ) : (
              contact?.fullname
            )}
          </div>
          <div className={styles.messageAuthorNameOnline}>
            {contact?.online === true ? (
              <span className="material-icons">circle</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={styles.messageSettings}>
          <span className="material-icons" onClick={() => handleChangeShow()}>
            settings
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
