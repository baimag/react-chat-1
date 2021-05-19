import React from 'react';
import styles from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchContact } from '../../redux/ducks/contacts';

function Search() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const handleSearchContact = (event) => {
    dispatch(setSearchContact(event.target.value));
  };
  const handleClear = () => {
    dispatch(setSearchContact(''));
  };

  return (
    <div className={styles['contacts-search']}>
      <div className={styles['contact-search']}>
        <button className={styles['contact-search-btn']}>
          <span className="material-icons">search</span>
        </button>

        <input
          className="contactForm"
          type="text"
          placeholder={'Search contact'}
          value={filter}
          onChange={handleSearchContact}
        />

        {filter.length !== 0 && (
          <button className={styles['contact-clear-btn']} onClick={handleClear}>
            <span className="material-icons">clear</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
