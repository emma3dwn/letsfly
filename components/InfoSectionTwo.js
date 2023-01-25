import React from 'react'
import styles from '../styles/infoSectionTwo.module.css'

function InfoSectionTwo({ post }) {
  return (
    <section className={styles.infoSectionWrapper}>
      <div className={styles.infoSection}>
        <img
          className={styles.imgScreenShot}
          src={post.infoSection.infoSectionImgTwo.mediaItemUrl}
          alt="Info Section Image Two"
        />
        <h3 className={styles.infoSectionText}>
          {post.infoSection.infoSectionTextTwo}
        </h3>
    </div>
  </section>
  )
}

export default InfoSectionTwo