import React from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Route } from 'react-router-dom';
import ContactsContent from './ContactsContent';
import { CSSTransition } from 'react-transition-group';
import profileTransitions from './profileTransition.module.css';

function Profile() {
  const load = useSelector((state) => state.application.loading);
  const showProfile = useSelector((state) => state.messages.showProfile);

  return (
    <CSSTransition
      in={showProfile}
      unmountOnExit
      timeout={1000}
      classNames={profileTransitions}
    >
      <div className={styles.profile}>
        <Route exact path="/contact/:id?">
          <ContactsContent />
        </Route>
      </div>
    </CSSTransition>
  );
}

export default Profile;
