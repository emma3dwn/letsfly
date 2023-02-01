import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import Popup from './Popup';

function Navbar({ post }) {
  {
    /* Navbar BG change at scroll */
  }
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      window.scrollY >= 100 ? setColorChange(true) : setColorChange(false);
    };

    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        className={colorChange ? styles.navbarWrapperBg : styles.navbarWrapper}
      >
        {/* NAVBAR DESKTOP LEFT SIDE */}
        <div className={styles.leftSideNavbar}>
          <Link href="/">
            <img
              className={styles.navbarLogo}
              src={post.navbar.logo.mediaItemUrl}
              alt="Logo"
            />
          </Link>
          <Link href="#" className={styles.navLinks} onClick={toggleMenu}>
            {post.navbar.blogLink}
          </Link>
          <Link href="#" className={styles.navLinks} onClick={toggleMenu}>
            {post.navbar.contactLink}
          </Link>
        </div>

        {/* NAVBAR DESKTOP RIGHT SIDE */}
        <div className={styles.rightSideNavbar}>
          <Popup post={post} inNav={true} />
          <Button
            key={post.id}
            post={post}
            text={post.navbar.downloadAppButton}
          ></Button>
        </div>

        {/* MOBILE TOGGLE MENU */}
        {/* Hamburger Toggle */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className={styles.mobileNavLinks}>
            <Link
              href="#"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              {post.navbar.blogLink}
            </Link>
            <Link
              href="#"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              {post.navbar.contactLink}
            </Link>
            <Popup post={post} inNav={true} inMobileNav={true} />
            <Button
              key={post.id}
              post={post}
              text={post.navbar.downloadAppButton}
              inMobileNav={true}
            ></Button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
