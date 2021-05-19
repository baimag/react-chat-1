import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './chats.module.css';

function SkeletonComponent(props) {
  return (
    <SkeletonTheme color="lightgrey" highlightColor="#dedede">
      <div className={styles['contacts-skeleton']}>
        <div className={styles['avatar-skeleton']}>
          <Skeleton circle={true} height={35} width={35} />
        </div>
        <div className={styles['contact-skeleton']}>
          <Skeleton count={1} width={115} height={16} />
          <Skeleton count={1} width={80} height={12} />
        </div>
        <div className={styles['time-skeleton']}>
          <Skeleton count={1} width={30} height={12} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonComponent;
