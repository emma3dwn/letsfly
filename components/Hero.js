import React from 'react'
import styles from '../styles/hero.module.css'


function Hero({ post }) {
  return (
    <section className={styles.heroSection}>

    {/* 
      HERO VIDEO 
        <div className={heroVideoContainer}>
          <img src={post.heroSection.heroBackground.mediaItemUrl} alt='Hero Section Background' />
        </div>
    */}
 
      <section className={styles.heroTextSection}>
        {/* HERO-TEXT LEFT SIDE */}
        <div className={styles.heroTextContainerLeft}>
          <div className={styles.leftSideHeadingContainer}>
            <h1 className={styles.leftSideHeading}> {post.heroSection.leftSideHeading} </h1>
          </div>
          <div className={styles.leftSideParagraphContainer}>
            <p className={styles.leftSideParagraph}> {post.heroSection.leftSideParagraph} </p>
          </div>
          <div className={styles.leftSideIllustrationContainer}>
            <img className={styles.planeIllustration} src={post.heroSection.planeIllustration.mediaItemUrl} alt='Plane Illustration' />
          </div>
        </div>

        {/* HERO-TEXT RIGHT SIDE */}
        <div className={styles.heroTextContainerRight}>
          <div className={styles.rightSideHeadingContainer}>
            <h2 className={styles.rightSideHeading}> {post.heroSection.rightSideHeading} </h2>
          </div>
          <div className={styles.rightSideEmailInput}>
            <h5 className={styles.rightSideParagraph}> {post.heroSection.emailInput} </h5>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Hero