import React from 'react'
import styles from '../styles/introSection.module.css'
import Image from 'next/image'

function IntroSection({ post }) {
  return (
    <section className={styles.introSectionWrapper}>
        <div className={styles.introSectionContent}>
          {/* FIRST SECTION */}
          <div className={styles.introSectionOne}>
            <div className={styles.introSectionOneImgContainer}>
                <img className={styles.introSectionImgOne} src={post.introSection.introSectionImgOne.mediaItemUrl} alt='Intro Section Image One' />
            </div>
            <div className={styles.introSectionOneTextContainer}>
              <h2 className={styles.introSectionOneTitle}>{post.introSection.introSectionHeadingOne}</h2>
              <p className={styles.introSectionOneParagraph}>{post.introSection.introSectionTextOne}</p>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className={styles.introSectionTwo}>
            <div className={styles.introSectionTwoImgContainer}>
                <img className={styles.introSectionImgTwo} src={post.introSection.introSectionImgTwo.mediaItemUrl} alt='Intro Section Image Two' />
            </div>
            <div className={styles.introSectionTwoTextContainer}>
              <h2 className={styles.introSectionTwoTitle}>{post.introSection.introSectionHeadingTwo}</h2>
              <p className={styles.introSectionTwoParagraph}>{post.introSection.introSectionTextTwo}</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default IntroSection