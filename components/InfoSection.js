import React from 'react'
import styles from '../styles/infoSection.module.css'

function infoSection({ post }) {
  return (
    <section className={styles.infoSectionWrapper}>
        <div className={styles.infoSectionContent}>

          {/* FIRST SECTION */}
          <div className={styles.infoSectionOne}>
            <div className={styles.infoSectionOneImgContainer}>
                <img className={styles.infoSectionImgOne} src={post.infoSection.infoSectionImgOne.mediaItemUrl} alt='Info Section Image One' />
            </div>
            <div className={styles.infoSectionOneTextContainer}>
              <h2 className={styles.infoSectionOneTitle}>{post.infoSection.infoSectionHeadingOne}</h2>
              <p className={styles.infoSectionOneParagraph}>{post.infoSection.infoSectionTextOne}</p>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className={styles.infoSectionTwo}>
            <div className={styles.infoSectionTwoImgContainer}>
                <img className={styles.infoSectionImgTwo} src={post.infoSection.infoSectionImgTwo.mediaItemUrl} alt='Info Section Image Two' />
            </div>
            <div className={styles.infoSectionTwoTextContainer}>
              <h4 className={styles.infoSectionTextTwo}>{post.infoSection.infoSectionTextTwo}</h4>
            </div>
          </div>

          {/* THIRD SECTION */}
          <div className={styles.infoSectionThree}>
            <div className={styles.infoSectionThreeImgContainer}>
                <img className={styles.infoSectionImgThree} src={post.infoSection.infoSectionImgThree.mediaItemUrl} alt='Info Section Image Three' />
            </div>
            <div className={styles.infoSectionThreeTextContainer}>
              {/* Text Field One */}
              <div className={styles.textFieldOneContainer}>
                <h4 className={styles.textFieldOneNumber}>{post.infoSection.infoSectionThreeTextFieldOneNumber}</h4>
                <p className={styles.textFieldOneParagraph}>{post.infoSection.infoSectionThreeTextFieldOneParagraph}</p>
              </div>
              {/* Text Field Two */}
              <div className={styles.textFieldTwoContainer}>
                <h4 className={styles.textFieldTwoNumber}>{post.infoSection.infoSectionThreeTextFieldTwoNumber}</h4>
                <p className={styles.textFieldTwoParagraph}>{post.infoSection.infoSectionThreeTextFieldTwoParagraph}</p>
              </div>
              {/* Text Field Three */}
              <div className={styles.textFieldThreeContainer}>
                <h4 className={styles.textFieldThreeNumber}>{post.infoSection.infoSectionThreeTextFieldThreeNumber}</h4>
                <p className={styles.textFieldThreeParagraph}>{post.infoSection.infoSectionThreeTextFieldThreeParagraph}</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default infoSection