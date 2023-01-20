import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ post }) {
  {/* Navbar BG change at scroll */}
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      window.scrollY >= 100 ? setColorChange(true) : setColorChange(false);
    };

    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);


  return (
    <header>
      <nav className={colorChange ? styles.navbarWrapperBg : styles.navbarWrapper}>
        {/* NAVBAR DESKTOP LEFT SIDE */}
        <div className={styles.leftSideNavbar}>
          <Link href="/">
            <img
              className={styles.navbarLogo}
              src={post.navbar.logo.mediaItemUrl}
              alt="Logo"
            />
          </Link>
          <Link href="#" className={styles.navLinks}>
            {post.navbar.blogLink}
          </Link>
          <Link href="#" className={styles.navLinks}>
            {post.navbar.contactLink}
          </Link>
        </div>

        {/* NAVBAR DESKTOP RIGHT SIDE */}
        <div className={styles.rightSideNavbar}>
          <Link href="#" className={styles.navLinks}>
            {post.navbar.signUpButton}
          </Link>
          <Link href="#" className={styles.downloadAppBtn}>
            {post.navbar.downloadAppButton}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
