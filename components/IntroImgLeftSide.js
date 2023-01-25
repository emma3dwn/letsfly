import React from 'react'
import styles from '../styles/introImgLeftSide.module.css'
import Image from 'next/image'

function IntroImgLeftSide({ post }) {
  return (
    <section className={styles.introSectionWrapper}>
          <div className={styles.introSection}>
            <img className={styles.imgScreenShot} src={post.introSection.introSectionImgOne.mediaItemUrl} alt='Intro Section Image One' />
            <div className={styles.introSectionTextContainer}>
              <h2 className={styles.introSectionTitle}>{post.introSection.introSectionHeadingOne}</h2>
              <p className={styles.introSectionParagraph}>{post.introSection.introSectionTextOne}</p>
            </div>
          </div> 
    </section>
  )
}

export default IntroImgLeftSide

