import React from 'react';
import styles from './messages.module.css';
import { setDeleteMessage } from '../../redux/ducks/messages';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

function OutboxMessage(props) {
  const readMessage = props.message.read;
  const timeSendMessage = props.message.time;
  const handleDeleteMessage = () => {
    dispatch(setDeleteMessage(messageId));
  };
  const dispatch = useDispatch();
  const messageId = props.message._id;

  return (
    <div>
      <div className={styles.messageDesignOut}>
        <div className={styles.messageOutText}>{props.content}</div>
        <div className={styles.messageTime}>
          {dayjs(timeSendMessage).format('HH:mm')}
        </div>
        <div className={styles.messageRead}>
          {readMessage === true ? (
            <div>
              <span className="material-icons">done_all</span>
            </div>
          ) : (
            <div>
              <span className="material-icons">check</span>
            </div>
          )}
        </div>
        <div className={styles.deleteButton} onClick={handleDeleteMessage}>
          <span className="material-icons">clear</span>
        </div>
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default OutboxMessage;
