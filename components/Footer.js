import Link from 'next/link'
import React from 'react'
import styles from '../styles/footer.module.css'

function Footer({ post }) {
  return (
  <>
    <section className={styles.footerSectionWrapper}>
      {/* LEFT SIDE */}
      <div className={styles.footerLeftSide}>
        {/* Logo */}
        <div className={styles.footerLeftSideLogoContainer}>
          <Link href='/'>
            <img className={styles.footerLeftSideLogo} src={post.footer.footerLogo.mediaItemUrl} alt='Logo' />
          </Link>
        </div>
        {/* First Links */}
        <div className={styles.footerLeftSideLinksContainerOne}>
          <Link className={styles.footerFirstLinks} href='#'>
            {post.footer.footerLinks.contactLink.title}
          </Link>
          <Link className={styles.footerFirstLinks} href='#'>
            {post.footer.footerLinks.aboutUsLink.title}
          </Link>
          <Link className={styles.footerFirstLinks} href='#'>
            {post.footer.footerLinks.faqLink.title}
          </Link>
        </div>
        {/* Second Links */}
        <div className={styles.footerLeftSideLinksContainerTwo}>
          <Link className={styles.footerSecondLinks} href='#'>
            {post.footer.footerLinks.termsLink.title}
          </Link>
          <Link className={styles.footerSecondLinks} href='#'>
            {post.footer.footerLinks.privacyLink.title}
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.footerRightSide}>
        <div className={styles.footerRightSideFormContainer}>
          <div className={styles.footerRightSideFormTitleWrapper}>
            <p className={styles.footerRightSideFormTitle}> {post.footer.newsletterSignUp.newsletterSignUpText} </p>
          </div>
          <div className={styles.footerRightSideFormInputFieldWrapper}>
            {/* FORM - p-tag just for demo */}
            <p className={styles.footerRightSideFormInputField}> {post.footer.newsletterSignUp.newsletterSignUpEmailField} </p>
          </div>
        </div>
        <div className={styles.footerSmIconsContainer}>
          <div className={styles.footerSmIcons}>
            <img className={styles.footerSmIconLinkedin} src={post.footer.socialIcons.socialIconLinkedin.mediaItemUrl} alt='Linked in' />
            <img className={styles.footerSmIconInstagram} src={post.footer.socialIcons.socialIconInstagram.mediaItemUrl} alt='Instagram' />
            <img className={styles.footerSmIconFacebook} src={post.footer.socialIcons.socialIconFacebook.mediaItemUrl} alt='Facebook' />
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER BOTTOM/COPYRIGHT */}
    <div className={styles.footerCopyrightContainer}>
      <p className={styles.footerCopyright}> {post.footer.copyright} </p>
    </div>
  </>
  )
}

export default Footer