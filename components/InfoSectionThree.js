import React from 'react';
import styles from '../styles/infoSectionThree.module.css';

export default function InfoSectionThree({ post }) {
  return (
    <section className={styles.infoSectionWrapper}>
      <div className={styles.infoSection}>
        <img
          className={styles.imgScreenShot}
          src={post.infoSection.infoSectionImgThree.mediaItemUrl}
          alt="Info Section Image Three"
        />
        
        <div className={styles.infoSectionTextContainer}>
          <ol className={styles.textFieldContainer}>
            <li className={styles.textFieldText}>
              {post.infoSection.infoSectionThreeTextFieldOneParagraph}
            </li>
            <li className={styles.textFieldText}>
              {post.infoSection.infoSectionThreeTextFieldTwoParagraph}
            </li>
            <li className={styles.textFieldText}>
              {post.infoSection.infoSectionThreeTextFieldThreeParagraph}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
