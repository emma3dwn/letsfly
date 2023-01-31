import React from 'react';
import styles from '../styles/signMeUp.module.css';
import Popup from './Popup';

function SignMeUp({ post }) {
  return (
    <div className={styles.signMeUpWrapper}>
      <h2 className={styles.signMeUpHeading}>
        {post.heroSection.rightSideHeading}
      </h2>
      <Popup post={post} />
    </div>
  );
}

export default SignMeUp;
