import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar({ post }) {
  {/* 
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  function toggleMenu(isActiveMobile, isOpen) {
    setIsActiveMobile(!isActiveMobile);
    setIsOpen(!isOpen);
  } 
  */}

  return (
    <div className={styles.navbarDesktopWrapper}>
      
      {/* NAVBAR DESKTOP LEFT SIDE */}
      <div className={styles.logoWrapper}>
        <Link href='/'>
          <img className={styles.navbarLogo} src={post.navbar.logo.mediaItemUrl} alt='Logo' />
        </Link>
      </div>

      {/*
      <div className={styles.leftSideNavbar}>
        <Link href='/'>
          Home
        </Link>
        <Link href='/app'>
          App
        </Link>
        <Link href='/contact'>
          Contact
        </Link>
      </div> 
      */}

      {/* NAVBAR DESKTOP RIGHT SIDE */}
      <div className={styles.rightSideNavbar}>
      <Link href='#' className={styles.signUpBtn}>
          {post.navbar.signUpButton}
        </Link>
        <Link href='#' className={styles.signInBtn}>
          {post.navbar.signInButton}
        </Link>
      </div>
    </div>
  )
}

export default Navbar