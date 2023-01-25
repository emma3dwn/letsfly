import React from 'react'
import styles from '../styles/hero.module.css'
import SignMeUp from './SignMeUp'


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

        <div className={styles.emailInputWrapper}>
        <SignMeUp 
                key={post.id} 
                post={post}
                heading={post.heroSection.rightSideHeading}
                paragraph={post.heroSection.emailInput}
          ></SignMeUp>
        </div>

        {/* PLANE ILLUSTRATION MOBILE */}
        <img className={styles.planeIllustrationMobile} src={post.heroSection.planeIllustration.mediaItemUrl} alt='Plane Illustration' />
        
      </div>
    </section>
  )
}

export default Hero