import Link from "next/link";
import React from "react";
import styles from "../styles/footer.module.css";
import Button from "./Button";
import Popup from "./Popup";
import Image from "next/image";

function Footer({ post }) {
  return (
    <>
      <section className={styles.footerSectionWrapper}>
        {/* LEFT SIDE */}
        <div className={styles.footerLeftSide}>
          {/* Logo */}
          <Link href="/">
            <Image
              className={styles.footerLeftSideLogo}
              src={post.footer.footerLogo.mediaItemUrl}
              alt="Logo"
              width={355}
              height={55}
              quality={75}
            />
          </Link>

          {/* First Links */}
          <div className={styles.footerLeftSideLinksContainerOne}>
            <Link className={styles.footerFirstLinks} href="#">
              {post.footer.footerLinks.contactLink.title}
            </Link>
            <Link className={styles.footerFirstLinks} href="#">
              {post.footer.footerLinks.aboutUsLink.title}
            </Link>
            <Link className={styles.footerFirstLinks} href="#">
              {post.footer.footerLinks.faqLink.title}
            </Link>
          </div>

          {/* Second Links */}
          <div className={styles.footerLeftSideLinksContainerTwo}>
            <Link className={styles.footerSecondLinks} href="#">
              {post.footer.footerLinks.termsLink.title}
            </Link>
            <Link className={styles.footerSecondLinks} href="#">
              {post.footer.footerLinks.privacyLink.title}
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.footerRightSide}>
          <p className={styles.footerRightSideFormTitle}>
            {post.footer.newsletterSignUp.newsletterSignUpText}
          </p>
          <Popup post={post} />
          <div className={styles.footerSmIconWrapper}>
            <Image
              className={styles.footerSmIcon}
              src={post.footer.socialIcons.socialIconLinkedin.mediaItemUrl}
              alt="Linked in"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              className={styles.footerSmIcon}
              src={post.footer.socialIcons.socialIconInstagram.mediaItemUrl}
              alt="Instagram"
              width={100}
              height={100}
            />
            <Image
              className={styles.footerSmIcon}
              src={post.footer.socialIcons.socialIconFacebook.mediaItemUrl}
              alt="Facebook"
              width={100}
              height={100}
              quality={75}
            />
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM/COPYRIGHT */}
      <div className={styles.footerCopyrightContainer}>
        {/* Second Links Mobile */}
        <div className={styles.footerLeftSideLinksContainerTwoMobile}>
          <Link className={styles.footerSecondLinksMobile} href="#">
            {post.footer.footerLinks.termsLink.title}
          </Link>
          <Link className={styles.footerSecondLinksMobile} href="#">
            {post.footer.footerLinks.privacyLink.title}
          </Link>
        </div>
        <p className={styles.footerCopyright}> {post.footer.copyright} </p>
      </div>
    </>
  );
}

export default Footer;
