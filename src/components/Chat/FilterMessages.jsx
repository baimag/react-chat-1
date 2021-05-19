import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages, setSearchForm } from '../../redux/ducks/messages';
import styles from './messages.module.css';

function FilterMessages() {
  const filter = useSelector((state) => state.messages.filter);
  const searchForm = useSelector((state) => state.messages.searchForm);
  const dispatch = useDispatch();
  const handleFilterMessages = (event) => {
    dispatch(setFilterMessages(event.target.value));
  };
  const handleSearchForm = () => {
    dispatch(setSearchForm());
  };
  const handleMessageSearchClear = () => {
    dispatch(setFilterMessages(''));
  };

  return (
    <div className={styles.messageSearch}>
      <button className={styles.messageSearchIcon}>
        <span className="material-icons" onClick={handleSearchForm}>
          search
        </span>
      </button>
      {searchForm ? (
        <input type="text" value={filter} onChange={handleFilterMessages} />
      ) : (
        ''
      )}
      {filter.length !== 0 && (
        <button className={styles.messageClearIcon}>
          <span className="material-icons" onClick={handleMessageSearchClear}>
            clear
          </span>
        </button>
      )}
    </div>
  );
}

export default FilterMessages;
