import React from 'react';
import styles from './chats.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../App/Avatar';
import * as dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from '../../redux/ducks/contacts';

function Contact(props) {
  const lastMessages = props.contact.lastMessage;
  const selected = useSelector((state) => state.contacts.selectedContactId);
  const dispatch = useDispatch();
  const handleSelectContact = () => {
    dispatch(selectContact(props.contact._id));
  };

  return (
    <ul>
      <li
        onClick={handleSelectContact}
        className={
          selected === props.contact._id
            ? `${styles['contact-active']} ${styles['contact-chat']}`
            : ''
        }
      >
        <div className={styles['contact-avatar']}>
          <Avatar
            size={'medium'}
            online={props.contact.online}
            contact={props.contact}
          />
        </div>
        <NavLink to={`/contact/${props.contact._id}`}>
          <div className={styles['contact-names']}>
            <div className={styles['contact-name']}>
              {' '}
              {props.contact.fullname}
            </div>

            <div className={styles['contact-last-message']}>
              {lastMessages === undefined
                ? ''
                : lastMessages.content.substr(0, 20) + '...'}
            </div>
          </div>
        </NavLink>
        {lastMessages === undefined ? (
          ''
        ) : (
          <div className={styles['contact-message-time']}>
            {dayjs(lastMessages?.time).format('HH:mm')}
          </div>
        )}
      </li>
    </ul>
  );
}

export default Contact;
