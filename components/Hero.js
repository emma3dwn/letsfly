import React from 'react'
import styles from '../styles/hero.module.css'


function Hero({ post }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTextWrapper}>

        {/* HERO-TEXT LEFT SIDE */}
        <div className={styles.heroTextContainerLeft}>
            <h1 className={styles.leftSideHeading}> {post.heroSection.leftSideHeading} </h1>
            <p className={styles.leftSideParagraph}> {post.heroSection.leftSideParagraph} </p>
            <img className={styles.planeIllustrationDesktop} src={post.heroSection.planeIllustration.mediaItemUrl} alt='Plane Illustration' />
        </div>

        {/* HERO-TEXT RIGHT SIDE */}
        <div className={styles.heroTextContainerRight}>
            <h2 className={styles.rightSideHeading}> {post.heroSection.rightSideHeading} </h2>
            <h5 className={styles.rightSideParagraph}> {post.heroSection.emailInput} </h5>
            <img className={styles.planeIllustrationMobile} src={post.heroSection.planeIllustration.mediaItemUrl} alt='Plane Illustration' />
        </div>
        
      </div>
    </section>
  )
}

export default Hero